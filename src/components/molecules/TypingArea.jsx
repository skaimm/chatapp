import { StyleSheet, View } from 'react-native'
import React from 'react'
import Button from '../atoms/Button'
import TextBox from '../atoms/TextBox'

const TypingArea = (props) => {
    const { onSend, value, onChangeText } = props
    return (
        <View style={styles.container}>
            <TextBox
                value={value}
                onChangeText={onChangeText}
                placeholder="Type your message..."
                useAnimation={false}
            />
            <Button
                label="Send"
                color="#000"
                width="20%"
                size="md"
                onPress={onSend}
                disabled={!value}
            />
        </View>
    )
}

export default TypingArea

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})