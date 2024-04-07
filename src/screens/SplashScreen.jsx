import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // you can check the version and update the app as live
        setTimeout(() => gotoLoginPage(), 1000)
    }, [])

    const gotoLoginPage = () => {
        navigation.navigate('LoginScreen');
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imageBackground}
                source={require('../assets/splash_bg.png')}>
                <View style={styles.card}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/chatapp_logo.png')}></Image>
                </View>
                <Text style={styles.text}>CHAT APP</Text>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2684fe',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFF',
        padding: 32,
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});