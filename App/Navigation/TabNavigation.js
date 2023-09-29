import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import Search from '../Screens/Search';
import Category from '../Screens/Category';
import Profile from '../Screens/Profile';

import { Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
     return (
          <Tab.Navigator

               initialRouteName='Home'
               screenOptions={{

                    headerShown: false,
                    tabBarStyle: {
                         height: 60,
                         borderTopColor: "#CCE3DE",
                         size: 30,

                    },
                    tabBarShowLabel: true,
                    tabBarInactiveTintColor: 'black',
                    tabBarActiveTintColor: '#4B8E71',




               }}>


               <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                         tabBarLabel: "Home",
                         tabBarIcon: ({ size, color }) => (
                              <Ionicons name="home" size={size} color={color} />
                         ),


                    }}
               />


               <Tab.Screen
                    name="Category"
                    component={Category}
                    options={{
                         tabBarLabel: "Category",
                         tabBarIcon: ({ size, color }) => (
                              <MaterialIcons name="category" size={size} color={color} />
                         ),
                    }}

               />

               <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                         tabBarLabel: "Search",
                         tabBarIcon: ({ size, color }) => (
                              <Ionicons name="search-sharp" size={size} color={color} />
                         ),
                    }}
               />


               <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                         tabBarLabel: "Cart",
                         tabBarIcon: ({ size, color }) => (
                              <MaterialCommunityIcons name="cart-heart" size={size} color={color} />
                         ),
                    }}
               />


               <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                         tabBarLabel: "Profile",
                         tabBarIcon: ({ size, color }) => (
                              <FontAwesome5 name="user-circle" size={size} color={color} />
                         ),
                    }}
               />


          </Tab.Navigator>

     );
};



export default TabNavigation;