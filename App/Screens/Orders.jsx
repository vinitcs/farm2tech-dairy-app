import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { setSelectedOrderProduct } from "../../redux/slice/orderSlice";


const Orders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ordersItem = useSelector((state) => state.orders.orders);
  console.log("orders --> ", ordersItem);

  const handleOrderProductSelected = (order) => {
    dispatch(setSelectedOrderProduct(order));
    navigation.navigate("EditOrder");
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.orderContainer}>
        {ordersItem.length !== 0 ?

          // Create a shallow copy and reverse it so that new placed order display on top. 
          [...ordersItem].reverse().map((item, index) => (
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => {
                handleOrderProductSelected(item);
              }}>
              <View style={styles.orderProductDeatils}>
                <Image source={item.product.uri} style={styles.logo} />

                <View>
                  <Text style={styles.productName}>{item.product.name}</Text>

                  <View style={styles.quantitySection}>
                    <Text style={styles.litreText}>{item.product.litre}L</Text>
                    <Text style={styles.QuantityText}>QTY: {item.planType === "Monthly" ? item.monthlyOrderQuantity : item.oneTimeOrderQuantity}</Text>
                  </View>

                  <View style={styles.priceSection}>
                    <Text style={styles.priceText}>{'\u20B9'} {item.product.price}</Text>
                    <Text style={styles.modeOfPaymentText}>COD</Text>
                  </View>

                  <Text style={styles.orderDateTitle}>Order Date:  {new Date(item.orderDate).toDateString()}</Text>
                </View>
              </View>

              <Text style={styles.orderStatus}>Order Status - {item.status}</Text>
              {/* <Text style={styles.activeStatus}>Active</Text> */}
              {item.planType === "Monthly" ? (
                <View>
                  <Text style={styles.planType}>{item.planType} Subscription</Text>
                  <Text style={styles.startDate}>Start Date:  {item.startDate}</Text>
                  <Text style={styles.endDate}>End Date:  {item.endDate}</Text>
                </View>
              ) : (
                <Text style={styles.planType}>{item.planType}</Text>
              )}
              <Text style={styles.orderId}>Order Id: {item.orderId}</Text>
            </TouchableOpacity>
          ))
          :
          <Text style={styles.emptyCartDisplayMsg}>Looks like you haven't placed any orders yet. Discover our fresh dairy products and place your first order today!</Text>
        }
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
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: "100%",
    gap: 15,
  },

  box: {
    // backgroundColor: colors.white,
    padding: 10,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    justifyContent: 'flex-start',
  },

  orderProductDeatils: {
    flexDirection: "row",
    gap: 10,
    paddingBottom: 10,
    marginBottom: 6,
    orderBottomColor: colors.outline,
  },

  logo: {
    // backgroundColor: 'yellow',
    resizeMode: 'contain',
    width: 90,
    height: 90,
  },

  productName: {
    // backgroundColor:'blue',
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.Semibold,

  },

  quantitySection: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 6,
  },

  litreText: {
    // backgroundColor:'violet',
    fontSize: 14,
    color: colors.lightText,
    fontFamily: fonts.Medium,
  },

  QuantityText: {
    // backgroundColor:'violet',
    fontSize: 14,
    color: colors.lightText,
    fontFamily: fonts.Medium,
  },

  priceSection: {
    // backgroundColor: colors.background,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  priceText: {
    // backgroundColor:'magenta',
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.Semibold,
  },
  modeOfPaymentText: {
    fontSize: 18,
    fontFamily: fonts.Semibold,
    color: colors.highlight1,
  },

  orderDateTitle: {
    // backgroundColor:'magenta',
    fontSize: 12,
    color: colors.primary,
    fontFamily: fonts.Bold,
  },

  startDate: {
    // backgroundColor:'magenta',
    fontSize: 12,
    color: colors.primary,
    fontFamily: fonts.Bold,
  },

  endDate: {
    // backgroundColor:'magenta',
    fontSize: 12,
    color: colors.lightText,
    fontFamily: fonts.Bold,
  },

  orderStatus: {
    fontSize: 16,
    color: colors.highlight2,
    fontFamily: fonts.Bold,
  },

  activeStatus: {
    color: colors.highlight2,
    fontFamily: fonts.Semibold,

  },
  planType: {
    color: colors.highlight1,
    fontFamily: fonts.Bold,

  },
  orderId: {
    fontSize: 12,
    color: colors.lightText,
    fontFamily: fonts.Medium,
    paddingTop: 12,
  },

  emptyCartDisplayMsg: {
    fontSize: 12,
    textAlign: "center",
    margin: "auto",
    color: colors.lightText
  }
});
