# CHAT APPLICATION - A React Native App built with Expo

This is a simple chat application built with React Native and Expo that allows users to chat with each other in real-time.

## Getting Started

**Prerequisites:**

- Node.js and npm (or yarn) installed on your system (https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

**Steps:**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/skaimm/chatapp.git
   cd chatapp
   
2. **Install dependencies:**
   ```bash
   npm install

3. **Start the Expo development server:**
   ```bash
   npx expo start
   OR testing with real device
   npx expo start --tunnel


Firebase Setup:

1. **Create a Firebase Project:**

- Go to the Firebase console (https://console.firebase.google.com/).
- If you don't have an account, create one.
- Click "Add project" and name your project.


2. **Enable Firebase Firestore:**

- In your Firebase project, navigate to the Firestore section.
- Click "Start collection" to create a collection for storing chat messages (e.g., "chats")..


3. **Install Firebase SDK:**
   
   In your project directory, run:
   ```bash
   npm install firebase


4.**Configure Firebase in Your App:**
   
- Create a file named firebase.js (or similar) in your project's root directory.
- Replace placeholders with your actual Firebase project configuration details obtained from the Firebase console:
   
   ```JavaScript
   import * as firebase from 'firebase/app';
   import 'firebase/auth';
   import 'firebase/firestore';
   
   const firebaseConfig = {
     // Your Firebase project configuration (API key, etc.)
   };
   
   if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
   }
   
   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

> **Note**
>
> In this repo I already pushed the firebase.js as example with unused account 

> **Warning**
>
> DO NOT PUSH IT TO PUBLIC

5.**Use Web modular API:**
   
   - Use Web modular API in your code you nedds.
   - check documents for more -> https://firebase.google.com/docs/firestore
**How to integrate Firebase Firestore:**

