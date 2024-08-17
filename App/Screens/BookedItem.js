import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import GoBackIcon from "../components/GoBackIcon/GoBackIcon";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import SingleProductPriceAndQuantity from "../components/ProductInfo/SingleProductPriceAndQuantity";
import DisplayButton from "../components/Button/DisplayButton";
import BookedItemPricing from "../components/BookedItemPricing/BookedItemPricing";

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
        <View
          style={{
            paddingHorizontal: 15,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <GoBackIcon color={colors.lightText} />
          <View>
            <Text
              style={{
                color: colors.lightText,
                fontSize: 16,
                textAlign: "center",
                fontFamily: fonts.Bold,
                marginBottom: 12,
              }}
            >
              BookedItem
            </Text>
          </View>
          <SingleProductPriceAndQuantity />

          {/* Address */}
          <View
            style={{
              backgroundColor: colors.background,
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
            }}
            onPress={() => console.log("added address")}
          >
            <View>
              <Text
                style={{
                  color: colors.lightText,
                  fontSize: 14,
                  fontFamily: fonts.Bold,
                }}
              >
                Delivery Address
              </Text>
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
                xyz plaza B257 Sundarland housing society Nagar xxxxxxxxxx
                Chiplun 415605
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
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
                91+ 98219210288
              </Text>
            </View>
          </View>

          {/* Monthly Subcription*/}
          <View
            style={{
              backgroundColor: colors.background,
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              borderRadius: 12,
              //     borderWidth: 1,
              //     borderColor: colors.outline,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.lightText,
                  fontSize: 14,
                  fontFamily: fonts.Bold,
                }}
              >
                Monthly subscription delivery
              </Text>
              <View
                style={{
                  marginTop: 4,
                }}
              >
                <Text
                  style={{
                    color: colors.lightText,
                    fontFamily: fonts.Semibold,
                    fontSize: 14,
                  }}
                >
                  Start From:{" "}
                </Text>
                <Text
                  style={{
                    color: colors.lightText,
                    fontFamily: fonts.Semibold,
                    fontSize: 14,
                  }}
                >
                  End in:{" "}
                </Text>
              </View>
            </View>
          </View>

          {/* Pricing Details*/}
          <View
            style={{
              backgroundColor: colors.background,
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
            }}
          >
               <BookedItemPricing Title={"MRP"} Price={40}/>
               <BookedItemPricing Title={"Discount"} Price={5}/>
               <BookedItemPricing Title={"Tax"} Price={1.5}/>
               <BookedItemPricing Title={"Quantity"} Price={3}/>
               <BookedItemPricing Title={"Total Amount"} Price={40.40}/>
          </View>

          <DisplayButton
            Title={"Add to Cart"}
            onPressChanges={() => navigation.navigate("Cart")}
            color={"primary"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BookedItem;

const styles = StyleSheet.create({});
