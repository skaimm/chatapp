import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../organisms/HomeHeader'
import Constants from "expo-constants";
import PeopleList from '../organisms/PeopleList';

const HomeTemplate = (props) => {
    const { people, value, onChangeText, onSearch, handleSearch, showHeader } = props

    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader title={"CHATAPP"}
                showHeader={showHeader}
                value={value}
                onChangeText={onChangeText}
                onSearch={onSearch}
                handleSearch={handleSearch} />
            <PeopleList people={people} />
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