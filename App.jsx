import { StyleSheet } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { ChatContextProvider } from './src/store/ChatContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ChatContextProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ChatContextProvider>
    </GestureHandlerRootView>
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
