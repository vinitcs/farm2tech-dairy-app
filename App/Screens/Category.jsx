import { StyleSheet, View, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import MilkProductSlider from "../components/MilkProductSlider/MilkProductSlider";
import { colors } from "../../theme/colors/colors";
import ProductDisplayCard from "../components/ProductCard/ProductDisplayCard";

const Category = () => {
  const route = useRoute();
  const [selectProduct, setSelectProduct] = useState(null);

  useFocusEffect(
    useCallback(() => {
      if (route.params?.selectedProduct) {
        setSelectProduct(route.params.selectedProduct);
      }
    }, [route.params?.selectedProduct])
  );

  const handleProductSelect = useCallback((product) => {
    setSelectProduct(product);
    // console.log("Selected product in Category:", product);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.categoryContainer}>
        <MilkProductSlider onProductSelect={handleProductSelect} />
        <ProductDisplayCard
          selectedProduct={selectProduct}
          title={selectProduct ? selectProduct.name : "Products"}
        />

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
