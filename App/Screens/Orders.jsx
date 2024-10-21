import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import BookedProductCard from "../components/ProductCard/BookedProductCard";

const Orders = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.orderContainer}>
        <TouchableOpacity>
          <BookedProductCard />
          <View style={styles.orderInfo}>
            <Text style={styles.orderStatus}>Order Status - Pending</Text>
            <Text style={styles.orderId}>Order Id: 4</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  orderContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingTop: 15,
    height: "100%",
  },

  orderInfo: {
    backgroundColor: colors.background,
    position: "relative",
    top: -12,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    // gap: 2,
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 6,
    paddingTop: 14,
    // marginBottom: 15,
  },
  orderStatus: {
    fontSize: 16,
    color: colors.endDate,
    fontFamily: fonts.Bold,
  },
  orderId: {
    fontSize: 14,
    color: colors.lightText,
    fontFamily: fonts.Semibold,
  },
});
