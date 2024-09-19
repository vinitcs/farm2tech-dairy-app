import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { colors } from "./../../theme/colors/colors";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View intensity={90} style={styles.headerContainer}>
      <View style={styles.menuBar}>
        <TouchableOpacity>
          <Icon
            name="menu"
            type="ionicons"
            size={34}
            color={colors.lightText}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
      </View>
      <Image source={require("./../../assets/logo.png")} style={styles.logo} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    width: "100%",
    height: "auto",
    borderBottomWidth: 0.5,
    borderColor: colors.outline,
    display: "flex",
    alignItems: "center",
    position: "relative",
  },

  menuBar: {
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 1,
  },

  logo: {
    // backgroundColor: 'yellow',
    resizeMode: "contain",
    width: 120,
    height: 60,
  },
});
