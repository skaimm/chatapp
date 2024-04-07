import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../organisms/HomeHeader'
import Constants from "expo-constants";
import PeopleList from '../molecules/PeopleList';

const HomeTemplate = () => {

    const onStartChat = () => {
        //start a chat
    }

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader title={"CHATAPP"} onStartChat={onStartChat} />
            <PeopleList />
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