import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import TextBox from '../components/atoms/TextBox';
import { useNavigation } from '@react-navigation/native';
import LoginTemplate from '../components/templates/LoginTemplate';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const onLogin = () => {
        if (validate()) {
            navigation.navigate('HomeScreen');
        }
    };

    const validate = () => {
        let currentErrors = { ...errors };
        let validate = true;
        if (email === '') {
            currentErrors['email'] = { message: 'Email CANNOT be empty!' };;
            validate = false;
        } else if (!validateEmail(email)) {
            currentErrors['email'] = { message: 'Email format is not valid!' };
            validate = false;
        } else delete currentErrors['email'];

        if (password === '') {
            currentErrors['password'] = { message: 'Password CANNOT be empty!' };
            validate = false;
        } else delete currentErrors['password'];

        if (validate) currentErrors = {};
        setErrors(currentErrors);
        return validate;
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };


    return (
        <LoginTemplate
            onSubmit={onLogin}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            errors={errors}
        />
    )
}

export default LoginScreen

const styles = StyleSheet.create({})