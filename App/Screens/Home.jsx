import React, { useCallback, useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import MilkProductSlider from "../components/MilkProductSlider/MilkProductSlider";
import DummySearch from "../components/Search/DummySearch";
import { colors } from "../../theme/colors/colors";
import Carousel from "../components/Carousel/Carousel";
import PopularProduct from "../components/ProductCard/PopularProduct";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [selectProduct, setSelectProduct] = useState(null);
  const navigation = useNavigation();

  const handleProductSelect = useCallback((product) => {
    setSelectProduct(product);
    navigation.navigate("Category", { selectProduct: product });
    // console.log("Selected product:", product);
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeContainer}>
          <Carousel />
          <View style={styles.sectionContainer}>
            <DummySearch />
            <MilkProductSlider onProductSelect={handleProductSelect} />
            <PopularProduct />
          </View>
          <Text style={styles.copyrightText}>
            Copyrights 2024. Farm2Tech. All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  homeContainer: {
    // paddingHorizontal: 15,
    backgroundColor: colors.white,
    height: "auto",
    paddingBottom: 15,
  },
  sectionContainer: {
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 30,
  },
  copyrightText: {
    fontSize: 10,
    color: colors.lightText,
    textAlign: "center",
    marginTop: 15,
  },
});

export default Home;
