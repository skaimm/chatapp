import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ChatTemplate from '../components/templates/ChatTemplate';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
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
        setChatInfo({
            chatRoomId: props.route.params.roomId,
            receiver: props.route.params.receiver
        })
    }, [props])


    useEffect(
        () => {
            if (chatInfo?.chatRoomId) {
                onSnapshot(query(collection(firestore, `chats/${chatInfo.chatRoomId}/messages`), orderBy("at", "desc"), limit(25)), (querySnapshot) => {
                    let data = querySnapshot.docs.map((doc) => doc.data())
                    setMessages(data)
                    console.log(data)
                })
                /*  onSnapshot(doc(firestore, `chats/${chatInfo.chatRoomId}/messages`, currentUser?.id), (snapshot) => {
                     setCurrentUser(snapshot.data())
                 }) */
            }
        }, [chatInfo?.chatRoomId]
    )

    const sendMessage = () => {
        // Implement logic to send message to server and update messages state
        let docData = {
            id: "",
            from: currentUser?.id,
            to: chatInfo.receiver?.id,
            message: message,
            type: "text",
            at: serverTimestamp()
        }
        if (message && message !== "") {
            addDoc(collection(firestore, `chats/${chatInfo.chatRoomId}/messages`), docData).then((res) => {
                updateDoc(doc(firestore, `chats/${chatInfo.chatRoomId}/messages/${res.id}`), { id: res.id })
            }).catch((error) => {
                console.log(error)
                // showOKAlert("Error", error, () => { })
            });
        }
    };

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