import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MilkProductSlider from "../components/MilkProduct/MilkProductSlider";
import { ScrollView } from "react-native-gesture-handler";
import ProductDisplayPrice from "../components/ProductDisplayInfo/ProductDisplayPrice";
import { colors } from "./../../theme/colors/colors";

const Category = () => {
  const [selectProduct, setSelectProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectProduct(product);
    console.log("Selected product:", product);
  };

  return (
    <ScrollView
      // contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewContent}
    >
      <View style={styles.categoryContainer}>
        <MilkProductSlider onProductSelect={handleProductSelect} />
        <ProductDisplayPrice selectedProduct={selectProduct} />
      </View>
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  categoryContainer: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    height: "100%",
    paddingBottom: 15,
  },
});
