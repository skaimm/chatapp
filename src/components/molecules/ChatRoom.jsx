import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import Avatar from '../atoms/Avatar';
import Header from '../atoms/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChatContext } from '../../store/ChatContext';

const ChatRoom = (props) => {
    const { currentUser } = useContext(ChatContext)
    const { room, onClickChatRoom } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={() => onClickChatRoom(room)}>
            <Avatar uri={room?.to?.pic} />
            <Header
                title={room?.to?.displayName}
                subtitle={room?.lastMsgTime?.toDate().toLocaleString() + "   " + room?.lastMsg}
                isSubTitleBold={!room?.lastMsgSeen && currentUser?.id !== room?.lastMsgFrom}
            />
        </TouchableOpacity>
    )
}

export default ChatRoom

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
})