import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import DisplayButton from "../components/Button/DisplayButton";
import BookedItemPricing from "../components/BookedItemPricing/BookedItemPricing";
import BookedProductCard from "../components/ProductCard/BookedProductCard";
import { useSelector } from "react-redux";

const BookedItem = () => {
  const navigation = useNavigation();

  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const selectedPlanType = useSelector((state) => state.product.selectedPlanType);
  const oneTimeOrderQuantity = useSelector((state) => state.product.oneTimeOrderQuantity);
  const monthlyOrderQuantity = useSelector((state) => state.product.monthlyOrderQuantity);
  const startDate = useSelector((state) => state.product.monthlyStartDate);
  const endDate = useSelector((state) => state.product.monthlyEndDate);


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
          >
            <View style={styles.addressHeader}>
              <Text style={styles.addressSectionTitle}>Delivery Address</Text>
              <TouchableOpacity onPress={() => { navigation.navigate('UpdateAddress') }}>
                <Text style={styles.editBtn}>edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addressSectionValue}>
              <Text style={styles.address}>
                xyz plaza B257 Sundarland housing society Nagar xxxxxxxxxx
                Chiplun 415605
              </Text>
            </View>

            <View style={styles.addressPhoneSection}>

              <Text selectable style={styles.phoneValue}>
                91+ 98219210288
              </Text>
            </View>
          </View>

          {/* Monthly Subcription*/}
          {selectedPlanType === "Monthly" && (


            <View style={styles.monthlySubscriptionSection}>
              <Text style={styles.monthlySubscriptionSectionTitle}>
                Monthly subscription delivery
              </Text>
              <Text style={styles.dateTitle}>Start Date: <Text style={styles.highlightDate}>{startDate}</Text></Text>
              <Text style={styles.dateTitle}>End Date: <Text style={styles.highlightDate}>{endDate}</Text></Text>
            </View>
          )
          }

          {/* Pricing Details*/}
          <View style={styles.pricingSection}>
            <BookedItemPricing Title={"MRP"} Price={selectedProduct.price} />
            <BookedItemPricing Title={"Discount"} Price={5} />
            <BookedItemPricing Title={"Tax"} Price={1.5} />
            <BookedItemPricing Title={"Quantity"} Price={selectedPlanType === "Monthly" ? monthlyOrderQuantity : oneTimeOrderQuantity} />
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
    flexDirection: "column",
    gap: 8,
    paddingTop: 15,
  },
  addressHeader: {
    flexDirection: "row",
    gap: 10
  },
  editBtn: {
    color: colors.primary,
    fontFamily:fonts.Semibold,
  },
  addressSection: {
    // backgroundColor: "red",
    width: "100%",
    height: "auto",
    flexDirection: "column",
    gap: 4,
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
    borderTopWidth: 0.4,
    borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  monthlySubscriptionSectionTitle: {
    color: colors.lightText,
    fontSize: 14,
    fontFamily: fonts.Bold,
  },
  dateTitle: {
    color: colors.lightText,
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  highlightDate: {
    color: colors.primary,
    fontFamily: fonts.Semibold,
  },
  pricingSection: {
    backgroundColor: colors.white,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "cloumn",
    gap: 4,
    justifyContent: "space-between",
    borderTopWidth: 0.4,
    borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});
