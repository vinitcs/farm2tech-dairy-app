import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { fonts } from "../../theme/fonts/fonts";
import { colors } from "../../theme/colors/colors";

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
        Farm2Tech leverages digital technologies in dairy to promote rural development by improving farmers' access to information, markets, and modern practices. The initiative aims to address challenges, explore opportunities, and assess the impact of digitalization on rural communities, while providing training to support technology adoption for sustainable growth.
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
    letterSpacing: 0.4,
    textAlign: "justify",
  },
});
