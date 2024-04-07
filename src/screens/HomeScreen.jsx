import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import HomeTemplate from '../components/templates/HomeTemplate'
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from 'firebase/firestore'
import { firestore } from '../../firebase'
import { ChatContext } from '../store/ChatContext'
import { showOKAlert, validateEmail } from '../utils/functions'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const [showHeader, setShowHeader] = useState(true)
    const navigation = useNavigation();
    const [searchValue, setSearchValue] = useState('');
    const { currentUser } = useContext(ChatContext);

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
                        createChatRoom(docSnap.data())
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
            navigation.navigate('ChatScreen', { receiver: user });
        }).catch((error) => {
            showOKAlert("Error", error, () => { })
        });
    }

    return (
        <HomeTemplate
            showHeader={showHeader}
            people={[]}
            value={searchValue}
            onChangeText={setSearchValue}
            onSearch={onSearch}
            handleSearch={handleSearch}
        />
    )
}

const createAChatRoom = () => {
    setDoc()
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