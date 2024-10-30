import { StyleSheet, Text, View, ScrollView, Image, Alert } from 'react-native';
import React from 'react';
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import DisplayButton from "../components/Button/DisplayButton";
import MonthlySelectCalender from "../components/Calendar/MonthlySelectCalendar";
import { deleteOrder, updateOrderStartDate } from '../../redux/slice/orderSlice';

const EditOrder = () => {
     const navigation = useNavigation();
     const dispatch = useDispatch();
     const selectedOrderProduct = useSelector((state) => state.orders.selectedOrderProduct);
     // console.log("Edit order ==>", selectedOrderProduct);


     const todayDate = new Date();
     const isStartDateEditable = new Date(selectedOrderProduct.startDate) > todayDate;

     const handleDateChange = (newStartDate, endDate) => {
          if (newStartDate > todayDate) {
               dispatch(updateOrderStartDate({
                    id: selectedOrderProduct.orderId,
                    startDate: newStartDate.toDateString(),
                    endDate: endDate.toDateString(),
               }));
          }
     };

     const handleDeleteOrder = (order) => {
          Alert.alert(
               "Confirm Deletion",
               "Are you sure you want to delete this order?",
               [
                    {
                         text: "Cancel",
                         style: "cancel"
                    },
                    {
                         text: "Delete",
                         onPress: () => {
                              dispatch(deleteOrder(order));
                              navigation.navigate("Orders");
                         },
                         style: "destructive"
                    }
               ]
          )
     }

     return (
          <ScrollView
               contentContainerStyle={styles.scrollViewContent}
               bounces={false}
               showsVerticalScrollIndicator={false}
          >
               <View style={styles.editOrderContainer}>
                    <View style={styles.box}>
                         <View style={styles.orderProductDeatils}>
                              <Image source={selectedOrderProduct.product.uri} style={styles.logo} />
                              <View>
                                   <Text style={styles.productName}>{selectedOrderProduct.product.name}</Text>

                                   <View style={styles.quantitySection}>
                                        <Text style={styles.litreText}>{selectedOrderProduct.product.litre}L</Text>
                                        <Text style={styles.QuantityText}>QTY: {selectedOrderProduct.planType === "Monthly" ? selectedOrderProduct.monthlyOrderQuantity : selectedOrderProduct.oneTimeOrderQuantity}</Text>
                                   </View>

                                   <View style={styles.priceSection}>
                                        <Text style={styles.priceText}>{'\u20B9'} {selectedOrderProduct.product.price}</Text>
                                        <Text style={styles.modeOfPaymentText}>COD</Text>
                                   </View>
                                   <Text style={styles.orderDateTitle}>Order Date:  {new Date(selectedOrderProduct.orderDate).toDateString()}</Text>
                              </View>
                         </View>

                         {selectedOrderProduct.planType === "Monthly" ? (
                              <View>
                                   <Text style={styles.planType}>{selectedOrderProduct.planType} Subscription</Text>
                                   <Text style={styles.updatedStartDate}>Updated Start Date:  {selectedOrderProduct.startDate}</Text>
                              </View>
                         ) : (
                              <Text style={styles.planType}>{selectedOrderProduct.planType}</Text>
                         )}

                         <Text style={styles.orderId}>Order Id: {selectedOrderProduct.orderId}</Text>

                         {selectedOrderProduct.planType === "Monthly" ? (
                              <Text style={styles.note}>Note: You can change or update the start date in the Monthly Subscription Plan using the calendar. However, once the start date has passed, it cannot be changed, and today's date cannot be selected as a new start date.</Text>
                         ) : (
                              <Text style={styles.note}>Note: You can cancel your order on the same day it was placed. Orders placed today will be delivered the next day.</Text>
                         )}
                    </View>
                    {selectedOrderProduct.planType === "Monthly" && (
                         <View>
                              {isStartDateEditable ? (
                                   <View>
                                        <MonthlySelectCalender onDateChange={handleDateChange} />
                                        <Text style={styles.note}>Selecting a date will update the "Updated Start Date" displayed above.</Text>
                                   </View>
                              ) : (
                                   <Text style={styles.note}>The calendar for selecting the updated start date is locked when the selected date is either today or has already passed.</Text>
                              )}
                         </View>
                    )}
                    <View>
                         <DisplayButton
                              Title={"Delete Order"}
                              onPressChanges={() => {
                                   handleDeleteOrder(selectedOrderProduct.orderId);
                              }}
                              color={"warning"}
                         />
                    </View>
               </View>
          </ScrollView>
     )
}

export default EditOrder

const styles = StyleSheet.create({
     scrollViewContent: {
          flexGrow: 1,
     },
     editOrderContainer: {
          flexGrow: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          paddingVertical: 15,
          justifyContent: "space-between",
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
     updatedStartDate: {
          // backgroundColor:'magenta',
          fontSize: 14,
          color: colors.highlight2,
          fontFamily: fonts.Bold,
     },
     orderDateTitle: {
          // backgroundColor:'magenta',
          fontSize: 12,
          color: colors.primary,
          fontFamily: fonts.Bold,
     },
     planType: {
          color: colors.highlight1,
          fontFamily: fonts.Bold,

     },
     orderId: {
          fontSize: 12,
          color: colors.lightText,
          fontFamily: fonts.Medium,
          // paddingTop: 12,
     },
     note: {
          fontSize: 12,
          color: colors.lightText,
          textAlign: "justify",
          letterSpacing: 0.2,
          paddingVertical: 10
     },
     // currentSelectedStartDate: {
     //      fontSize: 14,
     //      color: colors.primary,
     //      fontFamily: fonts.Bold,
     //      marginTop: 10,
     // },
})