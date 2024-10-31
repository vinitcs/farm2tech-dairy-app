import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";
import App from "./App/App";
import Auth from "./Auth/Auth";
import { useCustomFonts } from "../hooks/Fonts/useCustomFonts";
import { colors } from "../../theme/colors/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const Navigation = () => {
  const isLogin = useSelector((state) => state.userAuth.isLogin);
  const isLoading = useSelector((state) => state.userAuth.isLoading);
  const { fontsLoaded } = useCustomFonts();

  if (isLoading || !fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <ActivityIndicator size={50} color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* {isLogin ? <App /> : <Auth />} */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="App" component={App} />
        {!isLogin && <Stack.Screen name="Auth" component={Auth} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
