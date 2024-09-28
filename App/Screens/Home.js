import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import MilkProductSlider from "../components/MilkProduct/MilkProductSlider";
import ProductDisplayPrice from "../components/ProductDisplayInfo/ProductDisplayPrice";
// import { ScrollView } from 'react-native-gesture-handler';
import About from "../components/About";
import Contact from "../components/Contact";
import DummySearch from "../components/Search/DummySearch";
// import Speciality from "../components/Speciality/Speciality";
import { fonts } from "./../../theme/fonts/fonts";
import { colors } from "./../../theme/colors/colors";
import BannerSlider from "../components/Banner/BannerSlider";

const Home = ({ navigation }) => {
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
          {/* <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/home.png")}
              style={styles.homeImg}
            />
          </View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome To,</Text>
            <Text style={styles.organizationName}>Farm2Tech</Text>
            <Text style={styles.description}>
              Digitalization of dairy in rural
            </Text>
          </View> */}
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

  // imageContainer: {
  //   // backgroundColor:'pink',
  //   width: "100%",
  //   height: "auto",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },

  // homeImg: {
  //   resizeMode: "contain",
  //   width: 360,
  //   height: 200,
  // },

  // welcomeContainer: {
  //   // backgroundColor:'green',
  //   height: "auto",
  // },

  // welcomeText: {
  //   color: colors.lightText,
  //   fontSize: 12,
  //   textAlign: "center",
  //   fontFamily: fonts.Bold,
  // },

  // organizationName: {
  //   // backgroundColor:'red',
  //   fontSize: 50,
  //   textAlign: "center",
  //   color: colors.primary,
  //   fontFamily: fonts.Bold,
  // },

  // description: {
  //   color: colors.lightText,
  //   fontSize: 12,
  //   textAlign: "center",
  //   fontFamily: fonts.Medium,
  // },

  sectionContainer: {
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 30,
  },
});

export default Home;
