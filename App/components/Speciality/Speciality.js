import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { specialityData } from "./SpecialityContent";
import { fonts } from "./../../../theme/fonts/fonts";
import { colors } from "./../../../theme/colors/colors";

const Speciality = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.specialityTitle}>Cow and Buffalo Milk</Text>
      <Text style={styles.specialityDescription}>
        We provide cow and buffalo milk that cater to consumers who put a
        premium on taste, nutrition, health, craftmanship and sheer indulgence.
      </Text>
      {/* <Text style={styles.specialityDescription}>Price depends on custom </Text> */}

      <View style={styles.boxContainer}>
        {specialityData.map((item, idx) => (
          <View>
            <View style={styles.box} key={idx}>
              <Image source={item.uri} style={styles.logo} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Speciality;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'brown',
    flex: 1,
  },

  specialityTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    color: colors.lightText,
    fontFamily: fonts.Bold,
  },

  specialityDescription: {
    // backgroundColor:'cyan',
    paddingHorizontal: 4,
    marginTop: 5,
    fontSize: 10,
    textAlign: "center",
    letterSpacing: 0.2,
    fontFamily: fonts.Medium,
    color: colors.lightText,
  },

  boxContainer: {
    // backgroundColor: 'red',
    width: "100%",
    height: "auto",
    // padding: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 10,
  },

  box: {
    // backgroundColor: 'red',
    // padding: 10,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
    height: "auto",
  },

  logo: {
    // backgroundColor: 'yellow',
    resizeMode: "cover",
    width: 100,
    height: 160,
  },
  text: {
    // backgroundColor:'blue',
    textAlign: "center",
    fontSize: 14,
    padding: 6,
    fontFamily: fonts.Medium,
  },
});
