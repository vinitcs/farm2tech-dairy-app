import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../theme/colors/colors";
import { fonts } from "../../../theme/fonts/fonts";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

const AddressCard = () => {
     const navigation = useNavigation();
     return (
          <View
               style={styles.addressSection}
          >
               <View style={styles.addressHeader}>
                    <Text style={styles.addressSectionTitle}>Delivery Address</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('UpdateAddress') }}>
                         <Text style={styles.editBtn}>edit</Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.addressSectionValue}>
                    <Text style={styles.address}>
                         xyz plaza B257 Sundarland housing society Nagar xxxxxxxxxx
                         Chiplun 415605
                    </Text>
               </View>

               <View style={styles.addressPhoneSection}>
                    <Icon
                         name="call"
                         type="ionicon"
                         size={14}
                         color={colors.lightText}
                    />
                    <Text selectable style={styles.phoneValue}>
                         91+ 98219210288
                    </Text>
               </View>
          </View>
     );
};

export default AddressCard;

const styles = StyleSheet.create({
     addressHeader: {
          flexDirection: "row",
          gap: 10
     },
     editBtn: {
          color: colors.primary,
          fontFamily: fonts.Semibold,
     },
     addressSection: {
          // backgroundColor: "red",
          width: "100%",
          height: "auto",
          flexDirection: "column",
          gap: 4,
          paddingHorizontal: 8,
          paddingVertical: 10,
     },
     addressSectionTitle: {
          color: colors.lightText,
          fontSize: 14,
          fontFamily: fonts.Bold,
     },
     addressSectionValue: {
          // backgroundColor:colors.lightText,
          width: "92%",
          flexDirection: "row",
          flexWrap: "wrap",
     },
     address: {
          color: colors.lightText,
          fontSize: 16,
          letterSpacing: 0.2,
          fontFamily: fonts.Medium,
     },
     addressPhoneSection: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
     },
     phoneValue: {
          color: colors.lightText,
          fontSize: 16,
          fontFamily: fonts.Semibold,
     },
})