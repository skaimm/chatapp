import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ImageButton = (props) => {
    const { uri } = props

    return (
        <TouchableOpacity {...props} >
            <Image source={{ uri }} style={styles.image} />
        </TouchableOpacity>
    )
}

export default ImageButton

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
})