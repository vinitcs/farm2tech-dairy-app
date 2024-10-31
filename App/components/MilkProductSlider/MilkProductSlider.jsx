import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { memo, useCallback } from "react";
import { fonts } from "../../../theme/fonts/fonts";
import { colors } from "../../../theme/colors/colors";
import { productSliderData } from "./ProductSliderContent";
import { useNavigation } from "@react-navigation/native";

const MilkProductSlider = memo(({ onProductSelect }) => {
  // console.log("MilkProductSlider ReRendered ####");
  const navigation = useNavigation();

  const handPress = useCallback(
    (item) => {
      onProductSelect(item);
      navigation.navigate("Category", { selectedProduct: item });
    },
    [onProductSelect, navigation]
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        handPress(item);
      }}
    >
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
});

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
    width: 110,
    height: 110,
    margin: 4,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    justifyContent: "space-around",
    gap:15,
    alignItems: "center",
    marginTop: 12,
  },
  logo: {
    // backgroundColor:"red",
    resizeMode: "contain",
    width: 60,
    height: 75,
  },
  text: {
    // backgroundColor:"pink",
    textAlign: "center",
    padding: 2,
    fontSize: 14,
    fontFamily: fonts.Semibold,
  },
});
