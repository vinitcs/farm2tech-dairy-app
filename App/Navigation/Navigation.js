import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState } from 'react';
import App from './App/App';
import Auth from './Auth/Auth';

const Navigation = () => {
     const [login, setLogin] = useState(true)
     console.log("navigation")
     return login ? <App /> : <Auth /> 


}

export default Navigation;

const styles = StyleSheet.create({})