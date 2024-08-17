import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { colors } from "../../../theme/colors/colors";
import { fonts } from "../../../theme//fonts/fonts";
import { addressListData } from "./AddressListInfo";

const AddressList = () => {
  return (
    <View
      style={{
        // backgroundColor:colors.error,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 6,
      }}
    >
      {addressListData.map((item, idx) => (
        <TouchableOpacity
          style={{
            // backgroundColor: colors.background,
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            borderRadius: 12,
            borderWidth: 0.4,
            borderColor: colors.outline,
            paddingHorizontal: 8,
            paddingVertical: 8,
            marginBottom: 10,
          }}
          key={idx}
          onPress={() => console.log("added address")}
        >
          <View
            style={{
              position: "absolute",
              right: 1,
            }}
          >
            <Icon
              name="close-outline"
              type="ionicon"
              size={28}
              color={colors.lightText}
              onPress={() => console.log("delete address")}
            />
          </View>
          <View
            style={{
              // backgroundColor:colors.lightText,
              width: "92%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                color: colors.lightText,
                fontSize: 16,
                letterSpacing: 0.2,
                fontFamily: fonts.Medium,
              }}
            >
              {item.address}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Icon
              name="call-outline"
              type="ionicon"
              size={16}
              color={colors.lightText}
            />
            <Text
              selectable
              style={{
                color: colors.lightText,
                fontSize: 16,
                fontFamily: fonts.Semibold,
              }}
            >
              91+ {item.phone}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({});
