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


**How to integrate Firebase Firestore:**

- Create A project as web applciation in the firebase console
- Add firebase lib to code -> npm install firebase
- Then, to configure the web app's Firebase, create a firebase config file
- Create a Cloud Firestore DB to use in your app
- Use Web modular API in your code you nedds. check documents for more -> https://firebase.google.com/docs/firestore
