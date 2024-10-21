import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { colors } from "../../../theme/colors/colors";
import { fonts } from "../../../theme//fonts/fonts";
import { addressListData } from "./AddressListInfo";

const AddressList = () => {
  return (
    <View style={styles.addressListContainer}>
      {addressListData.map((item, idx) => (
        <TouchableOpacity
          style={styles.addressListCard}
          key={idx}
          onPress={() => console.log("added address")}
        >
          <View style={styles.closeIcon}>
            <Icon
              name="close-outline"
              type="ionicon"
              size={28}
              color={colors.lightText}
              onPress={() => console.log("delete address")}
            />
          </View>
          <View style={styles.addressSection}>
            <Text style={styles.addressValue}>{item.address}</Text>
          </View>

          <View style={styles.phoneSection}>
            <Icon
              name="call-outline"
              type="ionicon"
              size={16}
              color={colors.lightText}
            />
            <Text selectable style={styles.phoneValue}>
              91+ {item.phone}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  addressListContainer: {
    // backgroundColor:colors.error,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
  },
  addressListCard: {
    // backgroundColor: colors.background,
    width: "100%",
    height: "auto",
    gap: 4,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 10,
  },
  closeIcon: {
    position: "absolute",
    right: 2,
  },
  addressSection: {
    // backgroundColor:colors.lightText,
    width: "92%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  addressValue: {
    color: colors.lightText,
    fontSize: 16,
    letterSpacing: 0.2,
    fontFamily: fonts.Medium,
  },
  phoneSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  phoneValue: {
    color: colors.lightText,
    fontSize: 16,
    fontFamily: fonts.Semibold,
  },
});
