import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../DefaultScreens/Main';
import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    
     return (
          <Drawer.Navigator drawerContent={(props)=> <CustomDrawer{...props}/>}
               screenOptions={{
                    headerShown: false,
               }}
          >
               <Drawer.Screen name="Main" component={Main} />
          </Drawer.Navigator>
     );
}

export default DrawerNavigation;