import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import MainParent from "../../DefaultScreens/MainParent";
import Delivery from "../../Screens/Delivery";
import Notification from "../../Screens/Notification";
import Profile from "../../Screens/Profile";
import ProductDisplayInfo from "../../Screens/ProductDisplayInfo";
import SelectPlan from "../../Screens/SelectPlan";
import Address from "../../Screens/Address";
import NewAddress from "../../Screens/NewAddress";
import BookedItem from "../../Screens/BookedItem";
import Header from "../../components/Header";

// import Header from '../components/Header';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="MainParent"
        component={MainParent}
        // options={{headerShown:false}}
      />
      <Stack.Screen
        name="Notification"
        // options={{
        //      headerShown: false,
        //      gestureEnabled: true,
        //      gestureDirection: "vertical",
        //      cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
        //    }}
        component={Notification}
      />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen
        name="ProductDisplayInfo"
        component={ProductDisplayInfo}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="product Info" />,

          //      cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="SelectPlan"
        component={SelectPlan}
        options={({ route }) => ({
          headerShown: true,
          header: () => <Header goBackIcon={true} title={route.params?.selectedPlanType || "Default Plan"} />,
        })}
      />
      <Stack.Screen name="Address" component={Address} options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Address" />,
        }} />
      <Stack.Screen name="NewAddress" component={NewAddress} />
      <Stack.Screen name="BookedItem" component={BookedItem} options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="BookedItem" />,
        }} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
