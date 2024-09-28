import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { fonts } from "../../../theme/fonts/fonts";
import { colors } from "../../../theme/colors/colors";
import { productSliderData } from "./ProductSliderContent";

const MilkProductSlider = ({ onProductSelect }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onProductSelect(item)}>
      <View style={styles.box}>
        <Image source={item.uri} style={styles.logo} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.milkProductsContainer}>
      <Text style={styles.dairyDisplayContainerText}>Milk Products</Text>
      <FlatList
        data={productSliderData} // Your data
        renderItem={renderItem} // Function to render each item
        keyExtractor={(item, index) => index.toString()} // Unique key for each item
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MilkProductSlider;

const styles = StyleSheet.create({
  milkProductsContainer: {
    //     backgroundColor:"brown",
    width: "100%",
    // alignItems:"center"
  },
  dairyDisplayContainerText: {
    color: colors.lightText,
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    fontFamily: fonts.Bold,
  },

  box: {
    // backgroundColor:"red",
    paddingVertical: 14,
    width: 135,
    height: 135,
    margin: 4,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  logo: {
    resizeMode: "contain",
    width: 120,
    height: 80,
  },
  text: {
    textAlign: "center",
    padding: 6,
    fontSize: 14,
    fontFamily: fonts.Semibold,
  },
});
