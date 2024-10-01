import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import MilkProductSlider from "../components/MilkProduct/MilkProductSlider";
import ProductDisplayPrice from "../components/ProductDisplayInfo/ProductDisplayPrice";
import About from "../components/About";
import Contact from "../components/Contact";
import DummySearch from "../components/Search/DummySearch";
// import Speciality from "../components/Speciality/Speciality";
import { colors } from "./../../theme/colors/colors";
import BannerSlider from "../components/Banner/BannerSlider";

const Home = () => {
  const [selectProduct, setSelectProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectProduct(product);
    console.log("Selected product:", product);
  };

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
            {/* <Speciality /> */}
            <ProductDisplayPrice selectedProduct={selectProduct} />
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
