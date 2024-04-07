import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeTemplate from '../components/templates/HomeTemplate'

const HomeScreen = () => {

    const onStartChat = () => {
        //start a chat
    }

    return (
        <HomeTemplate people={[]} onStartChat={onStartChat} />
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