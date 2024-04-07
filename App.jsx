import { StyleSheet } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { ChatContextProvider } from './src/store/ChatContext';

const App = () => {
  return (
    <ChatContextProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ChatContextProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
