import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import { productDisplayInfoData } from "./ProductDisplayInfoContent";
import { fonts } from "../../../theme/fonts/fonts";
import { colors } from "../../../theme/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

const Product = ({ selectedProduct }) => {
  const navigation = useNavigation();
  console.log("Product ReRendered ****");

  const filteredData = selectedProduct
    ? productDisplayInfoData.filter(
      (item) => item.name === selectedProduct.name
    )
    : productDisplayInfoData;
  // console.log(filteredData);

  return (
    <View style={styles.productContainer}>
      <Text style={styles.dairyDisplayContainerText}>
        {selectedProduct?.name || "All Products"}
      </Text>
      <View style={styles.boxContainer}>
        {filteredData.map((item, idx) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProductInfo");
              // console.log("productDisplayInfo");
            }}
            key={idx}
          >
            <View style={styles.box} key={idx}>
              <Image source={item.uri} style={styles.logo} />

              <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.litreText}>{item.litre}L</Text>

                <View style={styles.priceSection}>
                  <Text style={styles.priceText}>
                    {"\u20B9"} {item.price}.0
                  </Text>
                  <Text style={styles.priceStrikeThroughText}>
                    {"\u20B9"} {item.price}.0
                  </Text>
                  <Text style={styles.priceOffText}>{item.price}% off</Text>
                </View>

                <Text style={styles.priceSubscribeText}>
                  Subscribe to save {item.price}Rs in per unit
                </Text>
              </View>

              <TouchableOpacity
                style={styles.addIcon}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <Icon
                  name="add-outline"
                  type="ionicon"
                  size={26}
                  color={colors.lightText}
                // onPress={() => { navigation.navigate('Cart') }}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    // backgroundColor:'purple',
    flex: 1,
    height: "auto",
  },

  dairyDisplayContainerText: {
    color: colors.lightText,
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    fontFamily: fonts.Bold,
  },

  boxContainer: {
    // backgroundColor: 'red',
    width: "100%",
    height: "auto",
    padding: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 16,
    marginTop: 10,
  },

  box: {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    justifyContent: "flex-start",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    gap: 10,
  },

  logo: {
    // backgroundColor: 'yellow',
    resizeMode: "contain",
    width: 90,
    height: 90,
  },
  text: {
    // backgroundColor:'blue',
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.Semibold,
  },

  litreText: {
    // backgroundColor:'violet',
    fontSize: 14,
    color: colors.lightText,
    fontFamily: fonts.Medium,
  },

  priceSection: {
    flexDirection: "row",
    gap: 6,
    marginTop: 6,
  },

  priceText: {
    // backgroundColor:'magenta',
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.Semibold,
  },

  priceStrikeThroughText: {
    // backgroundColor:'magenta',
    fontSize: 14,
    color: colors.lightText,
    fontFamily: fonts.Semibold,
    textDecorationLine: "line-through",
  },

  priceOffText: {
    // backgroundColor:'magenta',
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts.Semibold,
  },

  priceSubscribeText: {
    // backgroundColor:'magenta',
    fontSize: 12,
    color: colors.primary,
    fontFamily: fonts.Semibold,
  },

  addIcon: {
    // backgroundColor: "yellow",
    position: "absolute",
    right: 0,
    borderTopRightRadius: 12,
    zIndex: 3,
    padding: 6,
  },
});
