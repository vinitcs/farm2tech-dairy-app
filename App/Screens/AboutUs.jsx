import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors/colors';
import { fonts } from '../../theme/fonts/fonts';
const AboutUs = () => {
     return (
          <ScrollView
               contentContainerStyle={styles.scrollViewContent}
               bounces={false}
               showsVerticalScrollIndicator={false}
          >
               <View style={styles.aboutUsContainer}>
                    <Image
                         source={require("./../../assets/about.png")}
                         style={styles.homeImg}
                    />
                    <Text style={styles.aboutUsDescription}>
                         Milk2Market leverages digital technologies in dairy to promote rural development by improving farmers' access to information, markets, and modern practices. The initiative aims to address challenges, explore opportunities, and assess the impact of digitalization on rural communities, while providing training to support technology adoption for sustainable growth.
                    </Text>
               </View>
          </ScrollView>
     )
}

export default AboutUs

const styles = StyleSheet.create({
     scrollViewContent: {
          flexGrow: 1,
     },

     aboutUsContainer: {
          flexGrow: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          paddingVertical: 15,
          height: "100%",
          gap: 15,
          alignItems: "center",
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
})