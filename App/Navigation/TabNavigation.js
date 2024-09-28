import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { fonts } from "./../../theme/fonts/fonts";
import { colors } from "./../../theme/colors/colors";
import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import Search from "../Screens/Search";
import Category from "../Screens/Category";
import Profile from "../Screens/Profile";

import Header from "../components/Header.js";
import logo from "../../assets/logo.png";

const homeName = "Home";
const categoryName = "Category";
const searchName = "Search";
const cartName = "Cart";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          // backgroundColor: colors.outline,
          height: 60,
          borderBlockColor: colors.white,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: fonts.Bold,
          position: "relative",
          bottom: 6,
        },
        // headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: colors.lightText,
        tabBarActiveTintColor: colors.primary,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
            size = 28;
          } else if (rn === categoryName) {
            iconName = focused ? "grid" : "grid-outline";
            size = 28;
          } else if (rn === searchName) {
            iconName = focused ? "search" : "search-outline";
            size = 28;
          } else if (rn === cartName) {
            iconName = focused ? "cart" : "cart-outline";
            size = 28;
          } else if (rn === profileName) {
            iconName = focused ? "person-circle" : "person-circle-outline";
            size = 28;
          }

          return (
            <Icon name={iconName} type="ionicon" size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={Home}
        options={{ headerShown: true, header: () => <Header logo={logo} /> }}
      />
      <Tab.Screen
        name={categoryName}
        component={Category}
        options={{
          headerShown: true,
          header: () => <Header title="Category" />,
        }}
      />
      <Tab.Screen
        name={searchName}
        component={Search}
        options={{ headerShown: true, header: () => <Header title="Search" /> }}
      />
      <Tab.Screen
        name={cartName}
        component={Cart}
        options={{ headerShown: true, header: () => <Header title="Cart" /> }}
      />
      <Tab.Screen
        name={profileName}
        component={Profile}
        options={{ headerShown: true,
          header: () => <Header title="Profile" /> 
         }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
