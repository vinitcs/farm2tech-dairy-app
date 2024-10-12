import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import DisplayButton from "../components/Button/DisplayButton";
import BookedItemPricing from "../components/BookedItemPricing/BookedItemPricing";
import BookedProductCard from "../components/ProductCard/BookedProductCard";

const BookedItem = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: "100%",
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bookItemContainer}>
          <BookedProductCard />

          {/* Address */}
          <View
            style={styles.addressSection}
            onPress={() => console.log("added address")}
          >
            <Text style={styles.addressSectionTitle}>Delivery Address</Text>
            <View style={styles.addressSectionValue}>
              <Text style={styles.address}>
                xyz plaza B257 Sundarland housing society Nagar xxxxxxxxxx
                Chiplun 415605
              </Text>
            </View>

            <View style={styles.addressPhoneSection}>
              <Icon
                name="call-outline"
                type="ionicon"
                size={16}
                color={colors.lightText}
              />
              <Text selectable style={styles.phoneValue}>
                91+ 98219210288
              </Text>
            </View>
          </View>

          {/* Monthly Subcription*/}
          <View style={styles.monthlySubscriptionSection}>
            <Text style={styles.monthlySubscriptionSectionTitle}>
              Monthly subscription delivery
            </Text>
            <Text style={styles.startDate}>Start From: </Text>
            <Text style={styles.endDate}>End in: </Text>
          </View>

          {/* Pricing Details*/}
          <View style={styles.pricingSection}>
            <BookedItemPricing Title={"MRP"} Price={40} />
            <BookedItemPricing Title={"Discount"} Price={5} />
            <BookedItemPricing Title={"Tax"} Price={1.5} />
            <BookedItemPricing Title={"Quantity"} Price={3} />
            <BookedItemPricing Title={"Total Amount"} Price={40.4} />
          </View>

          <DisplayButton
            Title={"Confirm Order"}
            onPressChanges={() => navigation.navigate("Orders")}
            color={"primary"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BookedItem;

const styles = StyleSheet.create({
  bookItemContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingTop: 15,
  },
  addressSection: {
    backgroundColor: colors.white,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    borderRadius: 12,
    // borderWidth: 1,
    // borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  addressSectionTitle: {
    color: colors.lightText,
    fontSize: 14,
    fontFamily: fonts.Bold,
  },
  addressSectionValue: {
    // backgroundColor:colors.lightText,
    width: "92%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  address: {
    color: colors.lightText,
    fontSize: 16,
    letterSpacing: 0.2,
    fontFamily: fonts.Medium,
  },
  addressPhoneSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  phoneValue: {
    color: colors.lightText,
    fontSize: 16,
    fontFamily: fonts.Semibold,
  },
  monthlySubscriptionSection: {
    backgroundColor: colors.white,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  monthlySubscriptionSectionTitle: {
    color: colors.lightText,
    fontSize: 14,
    fontFamily: fonts.Bold,
  },
  startDate: {
    color: colors.lightText,
    fontFamily: fonts.Semibold,
    fontSize: 14,
  },
  endDate: {
    color: colors.lightText,
    fontFamily: fonts.Semibold,
    fontSize: 14,
  },
  pricingSection: {
    backgroundColor: colors.white,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "cloumn",
    gap: 4,
    justifyContent: "space-between",
    borderRadius: 12,
    //     borderWidth: 1,
    //     borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});
