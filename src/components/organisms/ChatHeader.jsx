import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from '../atoms/Avatar';
import ImageButton from '../atoms/ImageButton';
import Header from '../atoms/Header';

const ChatHeader = (props) => {
    const { title, subtitle, uri, onBackPress } = props;
    return (
        <View style={styles.chatHeader}>
            <ImageButton uri="https://img.icons8.com/ios-filled/50/left.png" onPress={onBackPress} />
            <Avatar uri={uri} />
            <Header title={title} subtitle={subtitle} />
        </View>
    )
}

export default ChatHeader

const styles = StyleSheet.create({
    chatHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
})