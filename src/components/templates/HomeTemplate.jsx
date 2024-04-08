import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../organisms/HomeHeader'
import Constants from "expo-constants";
import ChatRoomList from '../organisms/ChatRoomList';

const HomeTemplate = (props) => {
    const { chatRooms, value, onChangeText, onSearch, handleSearch, showHeader, onClickChatRoom } = props

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader title={"CHATAPP"}
                showHeader={showHeader}
                value={value}
                onChangeText={onChangeText}
                onSearch={onSearch}
                handleSearch={handleSearch} />
            <ChatRoomList chatRooms={chatRooms} onClickChatRoom={onClickChatRoom} />
        </SafeAreaView>
    )
}

export default HomeTemplate

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
})