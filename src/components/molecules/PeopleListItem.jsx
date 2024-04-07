import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PeopleListItem = (props) => {
    const { title, subtitle, uri } = props;
    return (
        <View style={styles.container}>
            <Avatar uri="https://picsum.photos/200/300" />
            <Header title={title} subtitle={subtitle} />
        </View>
    )
}

export default PeopleListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
})