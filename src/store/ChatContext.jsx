import React, { createContext, useEffect, useState } from 'react';
import { firestore } from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

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
                console.log("before update")
                onSnapshot(doc(firestore, "users", currentUser?.id), (snapshot) => {
                    console.log("updated", snapshot.data())
                    setCurrentUser(snapshot.data())
                })
            }
        }, [currentUser?.id]
    )

    return (
        <ChatContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                chatRooms,
                setChatRooms
            }}>
            {children}
        </ChatContext.Provider>
    );
};
