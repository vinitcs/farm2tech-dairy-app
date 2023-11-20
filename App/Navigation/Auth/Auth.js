import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator } from '@react-navigation/stack'
import Login from '../../Screens/Auth/Login';




// import Header from '../components/Header';

const Stack = createStackNavigator();

const AppNavigation = () => {
     return (
        
               <Stack.Navigator>
                   
                    <Stack.Screen
                         name='Login'
                         component={Login}
                         options={{ headerShown: false }}
                    />
                   
               </Stack.Navigator>

         
     )
}

export default AppNavigation

const styles = StyleSheet.create({})