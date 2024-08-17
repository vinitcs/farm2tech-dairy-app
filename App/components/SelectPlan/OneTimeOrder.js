import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../theme/colors/colors";
import { fonts } from "../../../theme/fonts/fonts";
import SingleProductPriceInfo from "../ProductInfo/SingleProductPriceInfo";
import CountQuantity from "../Count/CountQuantity";
import DisplayButton from "../Button/DisplayButton";
import { useNavigation } from "@react-navigation/native";

const OneTimeOrder = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 25,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: colors.lightText,
          fontSize: 16,
          textAlign: "center",
          fontFamily: fonts.Bold,
        }}
      >
        One Time Order
      </Text>

      <SingleProductPriceInfo />

      <View
        style={{
          // backgroundColor:'cyan',
          width: "100%",
          height: "auto",
          flexDirection: "column",
          gap: 4,
          // marginTop:10,
        }}
      >
        <Text
          style={{
            color: colors.lightText,
            textAlign: "center",
            fontSize: 12,
            fontFamily: fonts.Semibold,
          }}
        >
          Select Quantity
        </Text>
        <CountQuantity />
      </View>
      <Text
        style={{
          fontSize: 12,
          color: colors.lightText,
          textAlign: "justify",
          letterSpacing: 0.2,
        }}
      >
        This is a one-time order. Place your order today, and it will be
        delivered the next day.
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          // alignItems: 'center'
        }}
      >
        <DisplayButton
          Title={"Next"}
          onPressChanges={() => navigation.navigate("Address")}
          color={"primary"}
        />
      </View>
    </View>
  );
};

export default OneTimeOrder;

const styles = StyleSheet.create({});
