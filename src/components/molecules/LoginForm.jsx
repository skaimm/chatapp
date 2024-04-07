import { StyleSheet } from 'react-native'
import React from 'react'
import TextBox from '../atoms/TextBox';
import Button from '../atoms/Button';

const LoginForm = (props) => {
    const { onSubmit, email, password, setEmail, setPassword, errors } = props;

    return (
        <>
            <TextBox
                value={email}
                onChangeText={setEmail}
                label="E-Mail"
                keyboardType="email-address"
                errors={errors}
                name="email"
                useAnimation={true}
            />
            <TextBox
                value={password}
                onChangeText={setPassword}
                label="Password"
                secureTextEntry={true}
                errors={errors}
                name="password"
                useAnimation={true}
            />
            <Button
                label="Login"
                color="#2684fe"
                width="80%"
                size="md"
                onPress={onSubmit}
            />
        </>
    );
}


export default LoginForm

const styles = StyleSheet.create({})