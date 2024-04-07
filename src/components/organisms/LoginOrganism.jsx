import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '../molecules/LoginForm'

const LoginOrganism = (props) => {
    const { onSubmit, email, password, setEmail, setPassword, errors } = props

    return (
        <>
            <Text style={styles.logoText}>ChatApp</Text>
            <LoginForm onSubmit={onSubmit} email={email} password={password} setEmail={setEmail} setPassword={setPassword} errors={errors} />
            <Text style={styles.registerText}>Don't have an account yet? </Text>
        </>
    )
}

export default LoginOrganism

const styles = StyleSheet.create({
    logoText: {
        fontSize: 32,
        textAlign: 'center',
        color: '#444',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    registerText: {
        fontSize: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        marginTop: 12,
    }
})