
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from "react";
// import { NavigationContainer } from '@react-navigation/native';
import Navigation from './App/Navigation/Navigation';
import { AuthProvider } from './App/context/auth/auth.context';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const App = () => {
  console.log("main")
  return (
    <AuthProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AuthProvider>
  )
}

export default App;

const styles = StyleSheet.create({

});
