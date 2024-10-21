import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { Icon } from "@rneui/themed";
import { fonts } from "../../theme/fonts/fonts";
import { colors } from "../../theme/colors/colors";

const Contact = () => {
  const [text, setText] = React.useState("");
  const [number, setNumber] = React.useState("");
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactUs}>Contact Us</Text>
      <View style={styles.contactMail}>
        <Text style={styles.contactMailTitle}>
          You can contact us through Email:
        </Text>
        {/* <Text style={[styles.contactMailTitle, {opacity:0.4}]}>
            (click on email)
          </Text> */}

        <Text style={styles.mailId} selectable={true}>
          farm2tech@gmail.com
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
            size={20}
            color={colors.primary}
          />
          <Text style={styles.addressText}>
            Address: Farm2Tech, Khed, Ratnagiri, 415605
          </Text>
        </View>
        <View style={styles.addressContent}>
          <Icon
            name="call-outline"
            type="ionicon"
            size={20}
            color={colors.primary}
          />
          <Text style={styles.addressText}>Phone: +91-0000000000</Text>
        </View>
        <View style={styles.addressContent}>
          <Icon
            name="time-outline"
            type="ionicon"
            size={20}
            color={colors.primary}
          />
          <Text style={styles.addressText}>
            Time: Mon - Sat 09:00 AM - 04:00 PM
          </Text>
          {/* <Text style={{ fontSize: 16, fontFamily: fonts.Regular }}>
              Open: 24 hours
            </Text> */}
        </View>
      </View>

      <Text style={styles.copyrightText}>
        Copyrights 2024. Farm2Tech. All Rights Reserved.
      </Text>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  contactContainer: {
    // backgroundColor: 'yellow',
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
    height: "auto",
  },

  contactUs: {
    color: colors.lightText,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.Bold,
  },

  contactMail: {
    // backgroundColor:'green',
    marginTop: 10,
    width: "100%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  contactMailTitle: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    letterSpacing: 1,
  },

  mailId: {
    fontSize: 28,
    fontFamily: fonts.Bold,
    color: colors.primary2,
    letterSpacing: 1,
  },

  mailDescription: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.lightText,
  },

  addressContainer: {
    // backgroundColor: 'orange',
    width: "100%",
    height: "auto",
    // justifyContent: 'space-between',
    // alignItems: 'center',
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    marginTop: 10,
  },
  addressContent: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },

  addressText: {
    fontSize: 16,
    fontFamily: fonts.Medium,
  },

  copyrightText: {
    fontSize: 10,
    color: colors.lightText,
    textAlign: "center",
  },
});
