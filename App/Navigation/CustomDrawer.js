import { StyleSheet, View } from "react-native";
import React from "react";
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
              label="My Cart"
              onPress={() => navigation.navigate("Cart")}
            />
            <Drawer.Item
              icon="account-circle-outline"
              label="My Account"
              onPress={() => navigation.navigate("Profile")}
            />
            {/* <Drawer.Item
                                        label="Delivery"
                                        onPress={() => navigation.navigate('Delivery')}
                                   /> */}
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
      <Text
        style={{ marginLeft: 20, color: colors.lightText, fontWeight: "700" }}
      >
        Version - 1.0.0
      </Text>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    // backgroundColor: "orange",
    height: "auto",
  },
  closeBtn: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  userInfoSection: {
    //     backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
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
    fontWeight:"800",
    letterSpacing:0.4,
    color:colors.primary
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
    height: "auto",
    display: "flex",
    gap: 300,
  },
  
});

// Colors
//   --main-color: #4B8E71;
//   --primary-color: #6B9080;
//   --button-background: #DA7650;
//   --primary-button-background: #fe7649;
//   --background-color: #CCE3DE;
//   --hover-color: #5c9ceb;
