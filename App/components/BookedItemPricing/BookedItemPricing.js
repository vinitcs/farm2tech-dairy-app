import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../theme/colors/colors";
import { fonts } from "../../../theme/fonts/fonts";

export default BookedItemPricing = ({ Title, Price }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: colors.lightText,
          fontSize: 14,
          fontFamily: fonts.Bold,
        }}
      >
        {Title}
      </Text>
      <Text
        style={{
          color: colors.lightText,
          fontSize: 14,
          fontFamily: fonts.Semibold,
          textAlign: "center",
        }}
      >
        {" "}
        {"\u20B9"} {Price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
