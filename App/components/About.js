import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { fonts } from "./../../theme/fonts/fonts";
import { colors } from "./../../theme/colors/colors";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutUs}>About Us</Text>
        <Image
          source={require("./../../assets/about.png")}
          style={styles.homeImg}
        />
        <Text style={styles.aboutUsDescription}>
          Farm2Tech aims to harness digitalization and technological
          advancements in dairy to foster rural development. The review aims to
          understand the significance of digital technologies in management of
          dairy products towards end user, identify the challenges and
          opportunities associated with implementing such projects, and examine
          existing studies on the impacts of digitalization in rural
          communities. By implementing these digitalisation solutions, Farm2Tech
          aims to bridge the technological gap for rural farmers, improving
          their access to information, markets, and modern dairy practices.
          Through this integrated approach, Farm2Tech will support rural
          development in various sector, empowering farmers and fostering
          sustainable growth in rural communities. Additionally, the project
          will work to provide training and support to help farmers and
          consumers adopt and adapt to digital technologies effectively.
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    flex: 1,
  },

  aboutContainer: {
    // backgroundColor: 'purple',
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    alignItems: "center",
  },

  aboutUs: {
    color: colors.lightText,
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    fontFamily: fonts.Bold,
  },

  homeImg: {
    // backgroundColor:'red',
    resizeMode: "cover",
    width: 400,
    height: 220,
  },

  aboutUsDescription: {
    color: colors.lightText,
    fontFamily: fonts.Medium,
    fontSize: 12,
    letterSpacing: 0.2,
    textAlign: "justify",
  },
});
