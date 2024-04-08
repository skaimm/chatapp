import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import HomeTemplate from '../components/templates/HomeTemplate'
import { addDoc, collection, doc, getDoc, onSnapshot, query, updateDoc, where } from 'firebase/firestore'
import { firestore } from '../../firebase'
import { ChatContext } from '../store/ChatContext'
import { showOKAlert, validateEmail } from '../utils/functions'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const [showHeader, setShowHeader] = useState(true)
    const navigation = useNavigation();
    const [searchValue, setSearchValue] = useState('');
    const { currentUser, chatRooms } = useContext(ChatContext);

    const handleSearch = () => {
        setShowHeader(!showHeader)
    }

    const onSearch = () => {
        //check value is email address
        if (validateEmail(searchValue)) {
            if (searchValue === currentUser?.id) {
                showOKAlert("Sorry", `Cannot chat with yourself`, () => { })
                return
            }
            //if its valid, check user is exist
            getDoc(doc(firestore, "users", searchValue))
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        // User is exist, create a chat room
                        let chatRoom = chatRooms.find(room => room?.to?.id === searchValue)
                        if (chatRoom) {
                            navigation.navigate('ChatScreen', { receiverId: searchValue, roomId: chatRoom.id, receiver: null });
                        } else {
                            createChatRoom(docSnap.data())
                        }
                    } else {
                        // User is not exist
                        showOKAlert("Sorry", `There is no email address registered as ${searchValue}`, () => { })
                    }
                })
                .catch((error) => {
                    showOKAlert("Error", error, () => { })
                });
        } else {
            showOKAlert("Warning", "Please, enter a email address!", () => { })
        }
    }

    const createChatRoom = (user) => {
        let docData = {
            id: "",
            people: [
                user?.id,
                currentUser?.id
            ]
        }

        addDoc(collection(firestore, "chats"), docData).then((res) => {
            updateDoc(doc(firestore, `chats/${res.id}`), { id: res.id })
            navigation.navigate('ChatScreen', { receiver: user, roomId: res.id });
        }).catch((error) => {
            showOKAlert("Error", error, () => { })
        });
    }

    const onClickChatRoom = (room) => {
        navigation.navigate('ChatScreen', { receiver: room?.to, roomId: room?.id, isRead: !room?.lastMsgSeen && currentUser?.id !== room?.lastMsgFrom });
    }
    return (
        <HomeTemplate
            showHeader={showHeader}
            chatRooms={chatRooms}
            value={searchValue}
            onChangeText={setSearchValue}
            onSearch={onSearch}
            handleSearch={handleSearch}
            onClickChatRoom={onClickChatRoom}
        />
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})