import { Alert, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import { useNavigation } from "@react-navigation/native";

import DisplayButton from "../components/Button/DisplayButton";
import BookedItemPricing from "../components/BookedItemPricing/BookedItemPricing";
import BookedProductCard from "../components/ProductCard/BookedProductCard";
import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../components/AddressCard/AddressCard";
import {
  clearSelectedProduct,
  clearSelectedPlanType,
  clearOneTimeOrderQuantity,
  clearMonthlyOrderQuantity,
  clearMonthlyAndEndDate,
  removeFromCart,
} from "../../redux/slice/productSlice";
import { addOrder } from "../../redux/slice/orderSlice";
import uuid from 'react-native-uuid';

const BookedItem = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const orderItem = useSelector((state) => state.orders.orders);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const selectedPlanType = useSelector((state) => state.product.selectedPlanType);
  const oneTimeOrderQuantity = useSelector((state) => state.product.oneTimeOrderQuantity);
  const monthlyOrderQuantity = useSelector((state) => state.product.monthlyOrderQuantity);
  const startDate = useSelector((state) => state.product.monthlyStartDate);
  const endDate = useSelector((state) => state.product.monthlyEndDate);

  // console.log("selectedProduct ==> ", selectedProduct);
  // console.log("selectedPlanType ==> ", selectedPlanType);
  // console.log("oneTimeOrderQuantity ==> ", oneTimeOrderQuantity);
  // console.log("monthlyOrderQuantity ==> ", monthlyOrderQuantity);
  // console.log("startDate ==> ", startDate);
  // console.log("endDate ==> ", endDate);

  const handleConfirmOrder = () => {
    // Check if the product is already ordered under the selected plan
    const isProductAlreadyOrderedAsMonthlySubscription = orderItem.find(
      (order) =>
        order.product.id === selectedProduct.id &&
        order.planType === "Monthly"
    );

    if (selectedPlanType === "Monthly" && isProductAlreadyOrderedAsMonthlySubscription) {
      // Display a message if the product is already ordered under the selected plan
      Alert.alert(
        "Product Already Ordered",
        "This product has already been ordered as a Monthly subscription."
      );
      return; // Exit the function if the product is already ordered
    }
    const newOrder = {
      orderId: uuid.v4(), // For temporary used only as unique id will be getting from banckend afterwards.
      product: selectedProduct,
      planType: selectedPlanType,
      oneTimeOrderQuantity,
      monthlyOrderQuantity,
      startDate,
      endDate,
      status: "Pending",
      orderDate: new Date().getTime(),
    }
    // Dispatch addOrder action to store the order
    dispatch(addOrder(newOrder));


    //Remove currently ordered product from cart
    dispatch(removeFromCart(selectedProduct.id));

    // Reset product state to initial values
    dispatch(clearSelectedProduct());
    dispatch(clearSelectedPlanType());
    dispatch(clearOneTimeOrderQuantity());
    dispatch(clearMonthlyOrderQuantity());
    dispatch(clearMonthlyAndEndDate());

    // Navigate to the Orders screen
    navigation.navigate("Orders");
  }

  return (
    <View style={styles.bookItemContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <BookedProductCard />
        <AddressCard />

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
          <Text style={styles.billingTitle}>Billing</Text>
          <BookedItemPricing Title={"MRP"} Price={selectedProduct ? selectedProduct.price : 0} />
          <BookedItemPricing Title={"Discount"} Price={5} />
          <BookedItemPricing Title={"Tax"} Price={1.5} />
          <BookedItemPricing Title={"Quantity"} Price={selectedPlanType === "Monthly" ? monthlyOrderQuantity : oneTimeOrderQuantity} />
          <BookedItemPricing Title={"Total Amount"} Price={40.4} />
        </View>

        <DisplayButton
          Title={"Confirm Order"}
          onPressChanges={handleConfirmOrder}
          color={"primary"}
        />
      </ScrollView>
    </View>
  );
};

export default BookedItem;

const styles = StyleSheet.create({
  bookItemContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    marginBottom: 20,
    gap: 8,
    paddingTop: 15,
    height: "100%",
  },
  monthlySubscriptionSection: {
    backgroundColor: colors.white,
    borderTopWidth: 0.4,
    borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  monthlySubscriptionSectionTitle: {
    color: colors.lightText,
    fontSize: 14,
    fontFamily: fonts.Bold,
    paddingBottom: 4,
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
    gap: 4,
    justifyContent: "space-between",
    borderTopWidth: 0.4,
    borderColor: colors.outline,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  billingTitle: {
    color: colors.lightText,
    fontSize: 14,
    fontFamily: fonts.Bold,
    paddingBottom: 4,
  }

});
