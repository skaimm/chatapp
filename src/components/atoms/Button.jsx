import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = (props) => {
    const { label, labelStyles } = props;

    return (
        <TouchableOpacity {...props} style={styles.buttonStyle(props)}>
            <Text style={[styles.labelStyle(props), { ...labelStyles }]}>{label}</Text>
        </TouchableOpacity>
    )
} 

export default Button;

const styles = StyleSheet.create({
    buttonStyle: ({ rounded, color, size, width }) => ({
        backgroundColor: color || '#FFF',
        borderRadius: rounded ? 50 : 6,
        padding: size == 'lg' ? 16 : size == 'md' ? 12 : 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        borderWidth: 0.1,
        borderColor: color || '#FFF',
        width: width ? width : "100%"
    }),
    labelStyle: ({ variant }) => ({
        color: variant == 'dark' ? '#111' : '#FFF',
        fontSize: 16,
    })
})