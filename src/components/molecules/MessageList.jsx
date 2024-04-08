import React from 'react';
import { FlatList } from 'react-native';
import Message from '../atoms/Message';

const MessageList = ({ data }) => (
    <FlatList
        data={data}
        renderItem={({ item }) => <Message item={item} />}
        keyExtractor={item => item?.id}
        inverted // Display newest messages at the top
    />
);

export default MessageList;