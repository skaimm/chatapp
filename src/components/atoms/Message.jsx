import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ChatContext } from '../../store/ChatContext';

const Message = (props) => {
    const { currentUser } = useContext(ChatContext);
    const { item } = props
    const isCurrentUser = item.from === currentUser?.id

    return (
        <View style={[styles.messageContainer, isCurrentUser && styles.justifyEnd]}>
            <View style={styles.messageContent(isCurrentUser)}>
                <Text style={styles.messageText}>{item?.message}</Text>
                <Text style={styles.messageTimestamp}>{item?.at?.toDate().toLocaleString()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
    },
    justifyEnd: {
        justifyContent: "flex-end"
    },
    messageContent: (isCurrentUser) => ({
        padding: 15,
        backgroundColor: isCurrentUser ? "#666" : "#333",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        marginBottom: 5,
    }),
    messageText: {
        color: '#fff',
    },
    messageTextCurrentUser: {
        color: '#fff',
    },
    messageTimestamp: {
        fontSize: 11,
        color: '#ddd',
    },
});

export default Message;