import React from 'react';
import { FlatList } from 'react-native';
import Message from '../atoms/Message';

const MessageList = ({ messages }) => (
    <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={item => item.id}
        inverted // Display newest messages at the top
    />
);

export default MessageList;