import { Animated, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'

const TextBox = (props) => {
    const { useAnimation, errors, name } = props
    const topAnim = useRef(new Animated.Value(13)).current;
    const fontAnim = useRef(new Animated.Value(14)).current;
    const isError = errors && name && errors[name];

    const activeHandler = (isActive) => {
        if (useAnimation) {
            let fontValue = isActive ? 12 : 14;
            let topValue = isActive ? -8 : 13;

            Animated.timing(topAnim, {
                toValue: topValue,
                duration: 300,
                useNativeDriver: false,
            }).start();

            Animated.timing(fontAnim, {
                toValue: fontValue,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    {...props}
                    style={[styles.input, { borderColor: isError ? 'red' : '#666' }]}
                    onFocus={() => activeHandler(true)}
                    onBlur={() => activeHandler(false)}>
                </TextInput>

                {useAnimation && <Animated.View
                    style={{
                        position: 'absolute',
                        marginHorizontal: 16,
                        top: props.value ? -8 : topAnim,
                    }}>
                    <Animated.Text
                        style={[
                            styles.label,
                            {
                                fontSize: props.value ? 12 : fontAnim,
                                backgroundColor: '#FFF',
                                color: isError ? 'red' : '#333'
                            },
                        ]}>
                        {props.label}
                    </Animated.Text>
                </Animated.View>}
            </View>
            {isError && (
                <Text
                    style={styles.errorText}>
                    {props.errors[props.name].message}
                </Text>
            )}
        </View>
    )
}

export default TextBox

const styles = StyleSheet.create({
    container: {
        width: "80%"
    },
    input: {
        padding: 16,
        height: 46,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 12,
        elevation: 1,
        backgroundColor: '#FFF',
        borderWidth: 0.3,
        color: "#333"
    },
    label: {
        paddingHorizontal: 8,
        marginHorizontal: -8,
    },
    errorText: {
        marginBottom: 12,
        marginTop: -10,
        marginLeft: 16,
        fontSize: 12,
        color: '#e94335',
    }
})