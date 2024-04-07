import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PeopleListItem from '../molecules/PeopleListItem'

const PeopleList = ({ people }) => {
    return (
        <FlatList
            data={people}
            renderItem={({ item }) => <PeopleListItem message={item} />}
            keyExtractor={item => item.id}
            inverted // Display newest messages at the top
        />
    )
}

export default PeopleList

const styles = StyleSheet.create({})