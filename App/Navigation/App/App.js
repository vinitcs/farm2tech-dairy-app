import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Splash from '../../DefaultScreens/Splash';
import MainParent from '../../DefaultScreens/MainParent';
import Delivery from '../../Screens/Delivery';
import Notification from '../../Screens/Notification';



// import Header from '../components/Header';

const Stack = createStackNavigator();

const AppNavigation = () => {
     return (
               <Stack.Navigator
               screenOptions={{
                    headerShown:false,
                    gestureEnabled:true,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
               }}
               >
                    
                    
                    {/* <Stack.Screen
                         name='Splash'
                         component={Splash}
                         options={{ headerShown: false }}
                    /> */}


                    <Stack.Screen
                         name='MainParent'
                         component={MainParent}
                    />
                    <Stack.Screen
                         name='Notification'
                         component={Notification}
                    />
                    <Stack.Screen
                         name='Delivery'
                         component={Delivery}
                    />
                   
               </Stack.Navigator>

     )
}

export default AppNavigation

const styles = StyleSheet.create({})