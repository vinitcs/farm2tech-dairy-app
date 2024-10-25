import { StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import MilkProductSlider from "../components/MilkProductSlider/MilkProductSlider";
import Product from "../components/ProductCard/Product";
import { colors } from "../../theme/colors/colors";

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
        <Product selectedProduct={selectProduct} />
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
