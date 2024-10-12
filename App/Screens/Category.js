import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MilkProductSlider from "../components/MilkProduct/MilkProductSlider";
import { ScrollView } from "react-native-gesture-handler";
import ProductDisplayPrice from "../components/ProductDisplayInfo/ProductDisplayPrice";
import { colors } from "./../../theme/colors/colors";
import { useFocusEffect, useRoute } from "@react-navigation/native";

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
    console.log("Selected product in Category:");
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
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
