import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatTemplate from '../components/templates/ChatTemplate';

const ChatScreen = ({ userId }) => {
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState('');

    const sendMessage = (text) => {
        // Implement logic to send message to server and update messages state
    };
    const onBackPress = () => {

    }

    return (
        <ChatTemplate
            messages={messages}
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            title="John Doe"
            onBackPress={onBackPress}
        />
    );
}

export default ChatScreen

const styles = StyleSheet.create({})