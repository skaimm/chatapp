import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginOrganism from '../organisms/LoginOrganism'

const LoginTemplate = (props) => {
    const { onSubmit, email, password, setEmail, setPassword, errors } = props
    return (
        <SafeAreaView style={styles.container}>
            <LoginOrganism onSubmit={onSubmit} email={email} password={password} setEmail={setEmail} setPassword={setPassword} errors={errors} />
        </SafeAreaView>
    )
}

export default LoginTemplate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});