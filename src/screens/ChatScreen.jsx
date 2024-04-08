import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ChatTemplate from '../components/templates/ChatTemplate';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, getDoc, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { ChatContext } from '../store/ChatContext';
import { showOKAlert } from '../utils/functions';

const ChatScreen = (props) => {
    const [chatInfo, setChatInfo] = useState(null)
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const { currentUser } = useContext(ChatContext);
    const navigation = useNavigation();

    useEffect(() => {
        if (props.route.params.isRead) {
            updateDoc(doc(firestore, `chats/${props.route.params.roomId}`), {
                lastMessageSeen: true,
            })
        }
        if (props.route.params.receiver) {
            console.log(props.route.params.roomId, props.route.params.receiver)
            setChatInfo({
                chatRoomId: props.route.params.roomId,
                receiver: props.route.params.receiver
            })
        } else {
            getDoc(doc(firestore, "users", props.route.params.receiverId))
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        // User is exist, create a chat room
                        setChatInfo({
                            chatRoomId: props.route.params.roomId,
                            receiver: docSnap.data()
                        })
                    } else {
                        // User is not exist
                        showOKAlert("Sorry", `Something is wrong`, () => { })
                    }
                })
                .catch((error) => {
                    showOKAlert("Error", error, () => { })
                });
        }
    }, [props])

    useEffect(
        () => {
            if (chatInfo?.chatRoomId) {
                onSnapshot(query(collection(firestore, `chats/${chatInfo.chatRoomId}/messages`), orderBy("at", "desc"), limit(25)), (querySnapshot) => {
                    let data = querySnapshot.docs.map((doc) => doc.data())
                    setMessages(data)
                })
            }
        }, [chatInfo?.chatRoomId]
    )

    const sendMessage = () => {
        // Implement logic to send message to server and update messages state
        if (message && message !== "") {
            if (!chatInfo?.chatRoomId) {
                createARoom()
                return
            }
            saveMessage()
        }
    };
    const saveMessage = (roomId) => {
        let fChatRoomId = roomId ? roomId : chatInfo.chatRoomId
        const now = serverTimestamp()
        let docData = {
            id: "",
            from: currentUser?.id,
            to: chatInfo.receiver?.id,
            message: message,
            type: "text",
            at: now
        }
        let temp = message
        setMessage("")
        addDoc(collection(firestore, `chats/${fChatRoomId}/messages`), docData).then((res) => {
            updateDoc(doc(firestore, `chats/${fChatRoomId}/messages/${res.id}`), { id: res.id })
            updateDoc(doc(firestore, `chats/${fChatRoomId}`), {
                lastMessage: message,
                lastMessageTime: now,
                lastMessageFrom: currentUser?.id,
                lastMessageSeen: false,
            })
        }).catch((error) => {
            setMessage(temp)
            showOKAlert("Error", error, () => { })
        });
    }

    const createARoom = async () => {
        let docData = {
            id: "",
            people: [
                chatInfo.receiver?.id,
                currentUser?.id
            ]
        }

        addDoc(collection(firestore, "chats"), docData).then((res) => {
            updateDoc(doc(firestore, `chats/${res.id}`), { id: res.id })
            setChatInfo((prev) => (
                {
                    ...prev,
                    chatRoomId: res.id,
                }
            ))
            saveMessage(res.id)
        }).catch((error) => {
            showOKAlert("Error", error, () => { })
        });
    }
    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <ChatTemplate
            messages={messages}
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            receiver={chatInfo?.receiver}
            onBackPress={onBackPress}
        />
    );
}

export default ChatScreen

const styles = StyleSheet.create({})