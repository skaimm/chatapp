import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatRoom from '../molecules/ChatRoom'

const ChatRoomList = ({ chatRooms, onClickChatRoom }) => {
    return (
        <FlatList
            data={chatRooms}
            renderItem={({ item }) => <ChatRoom room={item} onClickChatRoom={onClickChatRoom} />}
            keyExtractor={item => item.id}
        />
    )
}

export default ChatRoomList

const styles = StyleSheet.create({})