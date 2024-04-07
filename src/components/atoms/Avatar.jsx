import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Avatar = (props) => {
    const { uri } = props;
    return (
        <Image source={{ uri }} style={styles.avatar} />
    )
}

export default Avatar

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
})