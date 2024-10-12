import { StyleSheet, View, Dimensions } from "react-native";
import React, { version } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";
import { colors } from "./../../theme/colors/colors";
import {
  Title,
  Drawer,
  Button,
  Caption,
  Paragraph,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
// import ProfileAvatar from "../components/Avatar/ProfileAvatar";

const screenHeight = Dimensions.get("window").height;

const CustomDrawer = ({ navigation, props }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} style={styles.drawerContent}>
        <TouchableOpacity style={styles.closeBtn}>
          <Icon
            name="close-outline"
            type="ionicon"
            size={34}
            color={colors.lightText}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
        </TouchableOpacity>

        <View style={styles.userInfoSection}>
          {/* <View style={styles.userInfoProfilePic}>
              <ProfileAvatar size={80} />
            </View> */}
          <View style={styles.userInfoText}>
            <Text style={styles.userName}>Vinit Sunil Chavan</Text>
            <Text style={styles.memberText}>Member since 20 sep 2024</Text>
          </View>
        </View>
        <View style={styles.drawerSection}>
          <Drawer.Section showDivider={false}>
            <Drawer.Item
              icon="home-outline"
              label="Home"
              onPress={() => navigation.navigate("Home")}
            />
            <Drawer.Item
              icon="view-grid-outline"
              label="Category"
              onPress={() => navigation.navigate("Category")}
            />
            <Drawer.Item
              icon="magnify"
              label="Search"
              onPress={() => navigation.navigate("Search")}
            />
            <Drawer.Item
              icon="cart-outline"
              label="Cart"
              onPress={() => navigation.navigate("Cart")}
            />
            <Drawer.Item
              icon="shopping-outline"
              label="Orders"
              onPress={() => navigation.navigate("Orders")}
            />
            <Drawer.Item
              icon="account-circle-outline"
              label="Account"
              onPress={() => navigation.navigate("Profile")}
            />
            {/* <Drawer.Item
                                        label="Contact"
                                        onPress={() => navigation.navigate('Contact')}
                                   /> */}
          </Drawer.Section>
          <Drawer.Item
            icon="logout"
            label="Logout"
            //  onPress={() => navigation.navigate("Contact")}
          />
        </View>
      </DrawerContentScrollView>
      <Text style={styles.version}>Version - 1.0.0</Text>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    // backgroundColor: "orange",
    height: screenHeight,
  },
  closeBtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  userInfoSection: {
        // backgroundColor: "red",
    display: "flex",
    // flexDirection: "row",
    marginTop: 30,
    marginLeft: 18,
  },
  userInfoProfilePic: {
    marginLeft: 12,
  },
  userInfoText: {
    // backgroundColor:'yellow',
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
    marginLeft: 15,
    // width: 170,
  },
  userName: {
    fontSize: 18,
    flexWrap: "nowrap",
    fontWeight: "800",
    letterSpacing: 0.4,
    color: colors.primary,
  },

  memberText: {
    fontSize: 10,
    color: colors.lightText,
    fontWeight: "800",
    marginTop: 2,
    marginBottom: 2,
    letterSpacing: 0.2,
  },
  drawerSection: {
    // backgroundColor: "yellow",
    marginTop: 20,
    height: screenHeight - 150,
    justifyContent: "space-between",
    // gap: 300,
  },

  version: {
    marginLeft: 30,
    marginBottom:2,
    color: colors.lightText,
  },
});


