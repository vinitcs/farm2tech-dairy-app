import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import ProductDisplayPrice from "../components/ProductDisplayInfo/ProductDisplayPrice";
// import { ScrollView } from 'react-native-gesture-handler';
import About from "../components/About";
import Contact from "../components/Contact";
import DummySearch from "../components/Search/DummySearch";
import Speciality from "../components/Speciality/Speciality";
import { fonts } from "./../../theme/fonts/fonts";
import { colors } from "./../../theme/colors/colors";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView>
      <View
        style={{
          marginBottom: 20,
          paddingHorizontal: 15,
          backgroundColor: colors.white,
        }}
      >
        {/* <View
          style={{
            // backgroundColor:colors.lightText,
            // borderBottomWidth: 0.5,
            // borderColor: colors.outline,
          }}
        > */}
        <Header />
        {/* </View> */}

        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={
              {
                // backgroundColor: 'orange',
              }
            }
          >
            <View style={styles.imageContainer}>
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
            </View>
            <View style={{ marginTop: 10 }}>
              <DummySearch />
            </View>
            <View style={{ marginTop: 10 }}>
              <ProductSlider />
            </View>
            <View style={{ marginTop: 10 }}>
              <Speciality />
            </View>
            <View style={{ marginTop: 10 }}>
              <ProductDisplayPrice />
            </View>
            <View style={{ marginTop: 10 }}>
              <About />
            </View>
            <View style={{ marginTop: 10 }}>
              <Contact />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  imageContainer: {
    // backgroundColor:'pink',
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    alignItems: "center",
  },

  homeImg: {
    resizeMode: "contain",
    width: 360,
    height: 200,
  },

  welcomeContainer: {
    // backgroundColor:'green',
    // marginTop: 10,
    height: "auto",
  },

  welcomeText: {
    color: colors.lightText,
    fontSize: 12,
    textAlign: "center",
    fontFamily: fonts.Bold,
  },

  organizationName: {
    // backgroundColor:'red',
    fontSize: 50,
    textAlign: "center",
    color: colors.primary,
    fontFamily: fonts.Bold,
  },

  description: {
    color: colors.lightText,
    fontSize: 12,
    textAlign: "center",
    fontFamily: fonts.Medium,
  },
});

export default Home;
