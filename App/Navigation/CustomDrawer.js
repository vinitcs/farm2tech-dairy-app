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
import ProfileAvatar from "../components/Avatar/ProfileAvatar";

const CustomDrawer = ({ navigation, props }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View Style={styles.DrawerContent}>
          <TouchableOpacity style={styles.closeBtn}>
            <Icon
              name="x"
              type="octicon"
              size={30}
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
              <TouchableOpacity
                style={styles.accountNavigationBtn}
                onPress={() => navigation.navigate("Profile")}
              >
                <Icon
                  name="person"
                  type="ionicons"
                  size={20}
                  color={colors.primary2}
                />
                <Text style={{ color: colors.primary2, fontWeight: "800" }}>
                  My Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Drawer.Section style={styles.drawerSection}>
              <Drawer.Item
                icon="home"
                label="Home"
                onPress={() => navigation.navigate("Home")}
              />
              <Drawer.Item
                icon="grid"
                label="Category"
                onPress={() => navigation.navigate("Category")}
              />
              <Drawer.Item
                icon="magnify"
                label="Search"
                onPress={() => navigation.navigate("Search")}
              />
              <Drawer.Item
                icon="cart"
                label="My Cart"
                onPress={() => navigation.navigate("Cart")}
              />
              {/* <Drawer.Item
                                        label="Notification"
                                        onPress={() => navigation.navigate('Notification')}
                                   /> */}
              {/* <Drawer.Item
                                        label="Delivery"
                                        onPress={() => navigation.navigate('Delivery')}
                                   /> */}
              {/* <Drawer.Item
                                        label="Contact"
                                        onPress={() => navigation.navigate('Contact')}
                                   /> */}
              <Drawer.Item
                icon="logout"
                label="Logout"
                //  onPress={() => navigation.navigate("Contact")}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Text
        style={{ marginLeft: 15, color: colors.lightText, fontWeight: "700" }}
      >
        Version - 1.0.0
      </Text>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  closeBtn: {
    position: "absolute",
    right: 15,
    top: 15,
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
  },
  accountNavigationBtn: {
    // backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
    color: colors.primary2,
  },
  memberText: {
    fontSize: 10,
    color: colors.lightText,
    fontWeight: "800",
    marginTop: 2,
    marginBottom: 2,
    letterSpacing:0.2
  },
  drawerSection: {
    borderBottomWidth: 0,
    marginTop: 20,
  },
});

// Colors
//   --main-color: #4B8E71;
//   --primary-color: #6B9080;
//   --button-background: #DA7650;
//   --primary-button-background: #fe7649;
//   --background-color: #CCE3DE;
//   --hover-color: #5c9ceb;
