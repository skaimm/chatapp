import { Alert } from "react-native";
import { randomNames } from "./mockData"

export const getRandomDisplayName = () => {
    return randomNames[(Math.floor(Math.random() * randomNames.length))]
}

export const showOKAlert = (title, content, onOKPress) => {
    Alert.alert(title, content, [
        {
            text: 'OK', onPress: onOKPress
        },
    ]);
}

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};