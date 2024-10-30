import { StyleSheet } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import MainParent from "../../DefaultScreens/MainParent";
import ProductInfo from "../../Screens/ProductInfo";
import SelectPlan from "../../Screens/SelectPlan";
import UpdateAddress from "../../Screens/UpdateAddress";
import BookedItem from "../../Screens/BookedItem";
import Header from "../../components/Header/Header";
import Search from "../../Screens/Search";
import EditOrder from "../../Screens/EditOrder";
import Notification from "../../Screens/Notification";
import AboutUs from "../../Screens/AboutUs";
import ContactUs from "../../Screens/ContactUs";

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
          headerShown: true, // Manage header in SelectPlan screen
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

      <Stack.Screen
        name="EditOrder"
        component={EditOrder}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Edit Order" />,
        }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Notification" />,
        }}
      />

      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="About Us" />,
        }}
      />

      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          headerShown: true,
          header: () => <Header goBackIcon={true} title="Contact Us" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

