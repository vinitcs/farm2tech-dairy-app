import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { colors } from "./../../theme/colors/colors";

const Header = ({ logo, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.actionBtn}>
        <TouchableOpacity>
          <Icon
            name="menu-outline"
            type="ionicon"
            size={34}
            color={colors.lightText}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
      </View>
      {logo ? (
        <Image source={logo} style={styles.logo} />
      ) : (
        <Text style={styles.headerTitle}>{title}</Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    width: "100%",
    height: 60,
    borderBottomWidth: 0.5,
    borderColor: colors.outline,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 15,
    alignItems: "center",
    position: "relative",
  },

  actionBtn: {
    marginLeft:15,
    // backgroundColor: "orange",
    position: "absolute",
    left: 0,
  },

  logo: {
    // backgroundColor: 'yellow',
    resizeMode: "contain",
    width: 120,
    height: 60,
  },
  headerTitle: {
    // backgroundColor:"red",
    fontSize: 18,
    letterSpacing:0.4,
    // fontWeight: "600",
    color: colors.primary,
  },
});
