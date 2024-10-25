import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import MainParent from "../../DefaultScreens/MainParent";
// import Delivery from "../../Screens/Delivery";
// import Notification from "../../Screens/Notification";
import ProductInfo from "../../Screens/ProductInfo";
import SelectPlan from "../../Screens/SelectPlan";
import UpdateAddress from "../../Screens/UpdateAddress";
import BookedItem from "../../Screens/BookedItem";
import Header from "../../components/Header";
import Search from "../../Screens/Search";

// import Header from '../components/Header';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="MainParent"
        component={MainParent}
      // options={{headerShown:false}}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Search Product" />,
        }}
      />

      <Stack.Screen
        name="ProductInfo"
        component={ProductInfo}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Product Info" />,
          //      cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="SelectPlan"
        component={SelectPlan}
        options={{
          headerShown: true,  // Manage header in SelectPlan screen   
        }}
      // options={({ route }) => ({
      //   headerShown: true,
      //   header: () => (
      //     <Header
      //       goBackIcon={true}
      //       title={route.params?.selectedPlanType || "Default Plan"}
      //     />
      //   ),
      // })}
      />
      <Stack.Screen
        name="UpdateAddress"
        component={UpdateAddress}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Update Address" />,
        }}
      />
      
      <Stack.Screen
        name="BookedItem"
        component={BookedItem}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Booked Item" />,
        }}
      />

      {/* <Stack.Screen
        name="Notification"
        // options={{
        //      headerShown: false,
        //      gestureEnabled: true,
        //      gestureDirection: "vertical",
        //      cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
        //    }}
        component={Notification}
      /> */}
      {/* <Stack.Screen name="Delivery" component={Delivery} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
