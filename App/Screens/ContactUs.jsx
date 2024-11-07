import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { colors } from '../../theme/colors/colors';
import { fonts } from '../../theme/fonts/fonts';

const ContactUs = () => {
     return (
          <ScrollView
               contentContainerStyle={styles.scrollViewContent}
               bounces={false}
               showsVerticalScrollIndicator={false}
          >
               <View style={styles.contactUsContainer}>
                    <Image
                         source={require("./../../assets/contact.png")}
                         style={styles.contactImg}
                    />
                    <View style={styles.contactMail}>
                         <Text style={styles.contactMailTitle}>
                              You can mail us:
                         </Text>

                         <Text style={styles.mailId} selectable={true}>
                              Milk2Market@gmail.com
                         </Text>

                         <Text style={styles.mailDescription}>
                              we will reply in 2-3 working days
                         </Text>
                    </View>

                    <View style={styles.addressContainer}>
                         <View style={styles.addressContent}>
                              <Icon
                                   name="location-outline"
                                   type="ionicon"
                                   size={18}
                                   color={colors.lightText}
                              />
                              <Text style={styles.addressText}>Milk2Market, Khed, Ratnagiri, 415605</Text>
                         </View>
                         <View style={styles.addressContent}>
                              <Icon
                                   name="call-outline"
                                   type="ionicon"
                                   size={18}
                                   color={colors.lightText}
                              />
                              <Text style={styles.addressText}>+91 0000000000</Text>
                         </View>
                         <View style={styles.addressContent}>
                              <Icon
                                   name="time-outline"
                                   type="ionicon"
                                   size={18}
                                   color={colors.lightText}
                              />
                              <Text style={styles.addressText}>Mon - Sat 09:00 AM - 04:00 PM
                              </Text>
                         </View>
                    </View>
               </View>
          </ScrollView>
     )
}

export default ContactUs

const styles = StyleSheet.create({
     scrollViewContent: {
          flexGrow: 1,
     },

     contactUsContainer: {
          flexGrow: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          paddingVertical: 15,
          height: "100%",
          gap: 15,
          alignItems: "center",
     },
     contactImg: {
          // backgroundColor:'red',
          resizeMode: "contain",
          width: 400,
          height: 220,
     },

     contactMail: {
          // backgroundColor:'green',
          marginTop: 10,
          width: "100%",
          height: "auto",
          justifyContent: "space-between",
          alignItems: "center",
     },

     contactMailTitle: {
          fontSize: 12,
          color: colors.lightText,
          fontFamily: fonts.Semibold,
          letterSpacing: 1,
     },

     mailId: {
          fontSize: 28,
          fontFamily: fonts.Bold,
          color: colors.primary,
          letterSpacing: 1,
     },

     mailDescription: {
          fontSize: 14,
          fontFamily: fonts.Medium,
          color: colors.black,
     },

     addressContainer: {
          // backgroundColor: 'orange',
          width: "100%",
          height: "auto",
          paddingHorizontal: 6,
          borderRadius: 12,
          borderWidth: 0.4,
          borderColor: colors.outline,
          marginTop: 10,
     },
     addressContent: {
          flexDirection: "row",
          alignItems:"center",
          flexWrap: "wrap",
          gap: 8,
          paddingHorizontal: 6,
          paddingVertical: 6,
     },

     addressText: {
          fontSize: 16,
          fontFamily: fonts.Medium,
     },


})