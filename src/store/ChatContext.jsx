import React, { createContext, useEffect, useState } from 'react';
import { firestore } from '../../firebase';
import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from 'firebase/firestore';

export const defaultChats = {
    currentUser: {},
    chatRooms: [],
};

export const ChatContext = createContext(defaultChats);

export const ChatContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(defaultChats.currentUser);
    const [chatRooms, setChatRooms] = useState(defaultChats.chatRooms);

    useEffect(
        () => {
            if (currentUser?.id) {
                onSnapshot(doc(firestore, "users", currentUser?.id), (snapshot) => {
                    setCurrentUser(snapshot.data())
                })
            }
        }, [currentUser?.id]
    )

    const getUserData = async (userId) => {
        const userRef = await getDoc(doc(firestore, "users", userId))
        return userRef?.data();
    }

    const updateChatRoom = (chatRoomInfo) => {
        let tempChatRoom = chatRooms
        tempChatRoom = tempChatRoom?.filter(item => item.id !== chatRoomInfo.id || item.to.id !== currentUser?.id)
        if (chatRoomInfo.to.id !== currentUser?.id) {
            tempChatRoom.push(chatRoomInfo)
            setChatRooms(tempChatRoom)
        }
    }

    useEffect(() => {
        if (currentUser?.id) {
            console.log("genel", currentUser?.id)
            const q = query(collection(firestore, "chats"), where("people", "array-contains", currentUser?.id));
            onSnapshot(q, (querySnapshot) => {
                var counter = 0
                querySnapshot.forEach(async (doc) => {
                    const chatData = doc.data()
                    if (chatData.people.includes(currentUser?.id)) {
                        counter++
                        let otherUserId = chatData?.people?.find(user => user !== currentUser?.id)
                        // find room has users full data
                        let otherUserData = await getUserData(otherUserId)
                        updateChatRoom({
                            id: chatData?.id,
                            to: otherUserData,
                            lastMsg: chatData?.lastMessage,
                            lastMsgTime: chatData?.lastMessageTime,
                            lastMsgFrom: chatData?.lastMessageFrom,
                            lastMsgSeen: chatData?.lastMessageSeen
                        })
                    }
                });
                if (counter === 0) setChatRooms([])
            });
        }
    }, [currentUser?.id]);

    return (
        <ChatContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                chatRooms,
            }}>
            {children}
        </ChatContext.Provider>
    );
};
