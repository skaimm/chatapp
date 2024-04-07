// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqXkKeId8I5bBrFfMeLDKglC3bo0otocw",
    authDomain: "chat-application-e0559.firebaseapp.com",
    projectId: "chat-application-e0559",
    storageBucket: "chat-application-e0559.appspot.com",
    messagingSenderId: "526702087873",
    appId: "1:526702087873:web:a11276f473d35a032cce40",
    measurementId: "G-2JVW80NRCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);