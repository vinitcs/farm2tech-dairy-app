import React, { useCallback, useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import MilkProductSlider from "../components/MilkProductSlider/MilkProductSlider";
import About from "../components/About";
import Contact from "../components/Contact";
import DummySearch from "../components/Search/DummySearch";
import { colors } from "../../theme/colors/colors";
import BannerSlider from "../components/Banner/BannerSlider";
import PopularProduct from "../components/ProductCard/PopularProduct";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [selectProduct, setSelectProduct] = useState(null);
  const navigation = useNavigation();

  const handleProductSelect = useCallback((product) => {
    setSelectProduct(product);
    navigation.navigate("Category", { selectProduct: product });
    // console.log("Selected product:", product);
  },[navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeContainer}>
          <BannerSlider />
          <View style={styles.sectionContainer}>
            <DummySearch />
            <MilkProductSlider onProductSelect={handleProductSelect} />
            <PopularProduct />
            <About />
            <Contact />
          </View>
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
});

export default Home;
