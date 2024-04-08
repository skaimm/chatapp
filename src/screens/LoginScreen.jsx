import { StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LoginTemplate from '../components/templates/LoginTemplate';
import { firestore } from '../../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getRandomDisplayName, showOKAlert, validateEmail } from '../utils/functions';
import { ChatContext } from '../store/ChatContext';

const LoginScreen = () => {
    const { setCurrentUser } = useContext(ChatContext);
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const onLogin = () => {
        if (validate()) {
            // no auth so when login, add user if not exist
            checkUserExist()
        }
    };

    const checkUserExist = () => {
        getDoc(doc(firestore, "users", email))
            .then((docSnap) => {
                if (docSnap.exists()) {
                    // User has data in at least one document then goto home page
                    setCurrentUser(docSnap.data())
                    navigation.navigate('HomeScreen');
                } else {
                    // docSnap.data() will be undefined in this case
                    addUserToFirestore()
                }
            })
            .catch((error) => {
                showOKAlert("Error", error, () => { })
            });

    }

    const addUserToFirestore = () => {
        //new data
        let docData = {
            id: email,
            displayName: getRandomDisplayName(),
            createadAt: serverTimestamp(),
            lastSeen: serverTimestamp(),
            pic: "https://picsum.photos/200/300" // random picture

        }
        //save data to firestore
        setDoc(doc(firestore, `users/${email}`), docData).then(() => {
            setCurrentUser(docData)
            navigation.navigate('HomeScreen');
        }).catch((error) => {
            showOKAlert("Error", error, () => { })
        });

    }

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