import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChatTemplate from '../components/templates/ChatTemplate';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = (props) => {
    const [receiver, setReceiver] = useState(null)
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        setReceiver(props.route.params.receiver)
    }, [props])

    const sendMessage = (text) => {
        // Implement logic to send message to server and update messages state
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
            receiver={receiver}
            onBackPress={onBackPress}
        />
    );
}

export default ChatScreen

const styles = StyleSheet.create({})