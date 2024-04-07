import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageList from '../molecules/MessageList'
import ChatHeader from '../organisms/ChatHeader'
import TypingArea from '../molecules/TypingArea'
import Constants from "expo-constants";

const ChatTemplate = (props) => {
    const { message, messages, setMessage, sendMessage, title, onBackPress } = props

    return (
        <SafeAreaView style={styles.container}>
            <ChatHeader title={title} onBackPress={onBackPress} />
            <MessageList messages={messages} />
            <TypingArea onSend={sendMessage} value={message} onChangeText={setMessage} />
        </SafeAreaView>
    )
}

export default ChatTemplate

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
})