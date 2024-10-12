import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import ForgotPassword from "../../Screens/Auth/ForgotPassword";
import PasswordOtpVerification from "../../Screens/Auth/PasswordOtpVerification";
import NewPassword from "../../Screens/Auth/NewPassword";

// import Header from '../components/Header';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PasswordOtpVerification"
        component={PasswordOtpVerification}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
