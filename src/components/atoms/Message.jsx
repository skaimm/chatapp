import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ sender, timestamp, content, isCurrentUser }) => {
    const containerStyle = isCurrentUser ? styles.messageContainerCurrentUser : styles.messageContainer;
    const textStyle = isCurrentUser ? styles.messageTextCurrentUser : styles.messageText;

    return (
        <View style={containerStyle}>
            {isCurrentUser && <Avatar uri={sender.avatar} />}
            <View style={styles.messageContent}>
                {!isCurrentUser && <Avatar uri={sender.avatar} />}
                <Text style={styles.senderName}>{sender.name}</Text>
                <Text style={textStyle}>{content}</Text>
                <Text style={styles.messageTimestamp}>{timestamp}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginBottom: 5,
    },
    messageContainerCurrentUser: {
        flexDirection: 'row-reverse',
        padding: 10,
        backgroundColor: '#ffd700',
        borderRadius: 5,
        marginBottom: 5,
    },
    messageContent: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    senderName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    messageText: {
        color: '#000',
    },
    messageTextCurrentUser: {
        color: '#fff',
    },
    messageTimestamp: {
        fontSize: 11,
        color: '#ccc',
    },
});

export default Message;