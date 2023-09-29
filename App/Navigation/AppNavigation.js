import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../DefaultScreens/Splash';
import MainParent from '../DefaultScreens/MainParent';
// import Delivery from '../Screens/Delivery';
// import Header from '../components/Header';

const Stack = createStackNavigator();

const AppNavigation = () => {
     return (
          <NavigationContainer>
               <Stack.Navigator>
                    <Stack.Screen
                         name='Splash'
                         component={Splash}
                         options={{ headerShown: false }}
                    />
                    <Stack.Screen
                         name='MainParent'
                         component={MainParent}
                         options={{ headerShown: false }}
                    />
                   
               </Stack.Navigator>

          </NavigationContainer>
     )
}

export default AppNavigation

const styles = StyleSheet.create({})