import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageList from '../molecules/MessageList'
import ChatHeader from '../organisms/ChatHeader'
import TypingArea from '../molecules/TypingArea'
import Constants from "expo-constants";
import { convertUTCDateToLocalDate } from '../../utils/functions'

const ChatTemplate = (props) => {
    const { message, messages, setMessage, sendMessage, receiver, onBackPress } = props

    return (
        <SafeAreaView style={styles.container}>
            <ChatHeader title={receiver?.displayName} uri={receiver?.pic} onBackPress={onBackPress} subtitle={`Last Seen at ${receiver?.lastSeen.toDate().toLocaleString()}`} />
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