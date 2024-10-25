import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import ProfileAvatar from "../components/Avatar/ProfileAvatar";
import DisplayButton from "../components/Button/DisplayButton";
import ProfileDisplayCredentials from "../components/Credentials/ProfileDisplayCredentials";

export default function Profile() {
  return (
    <View style={styles.profileContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileContent}>
          <View style={styles.profileHeader}>
            <ProfileAvatar size={130} />
            <Text style={styles.userName}>Profile Name</Text>
            <Text style={styles.memberText}>Member since 20 Sep, 2023</Text>

            <TouchableOpacity onPress={() => console.log("Edit")}>
              <View style={styles.editProfileBtn}>
                <Text style={styles.editProfileBtnText}>Edit Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputsSection}>
            {/* Name  */}
            <View style={styles.inputsSubSection}>
              <Text style={styles.inputLabel}>Name</Text>
              <ProfileDisplayCredentials
                Title={"Profile name"}
                color={"outline"}
              />
            </View>

            {/* Phone  */}
            <View style={styles.inputsSubSection}>
              <Text style={styles.inputLabel}>Phone</Text>
              <ProfileDisplayCredentials
                Title={"Profile phone"}
                color={"outline"}
              />
            </View>

            {/* Email  */}
            <View style={styles.inputsSubSection}>
              <Text style={styles.inputLabel}>Email</Text>
              <ProfileDisplayCredentials
                Title={"Profile email"}
                color={"outline"}
              />
            </View>

            {/* Address  */}
            <View style={styles.inputsSubSection}>
              <Text style={styles.inputLabel}>Address</Text>
              <ProfileDisplayCredentials
                Title={"Profile address"}
                color={"outline"}
              />
            </View>

            {/* City  */}
            <View style={styles.inputsSubSection}>
              <Text style={styles.inputLabel}>City</Text>
              <ProfileDisplayCredentials
                Title={"Profile city"}
                color={"outline"}
              />
            </View>

            {/* Zip/Postal Code  */}
            <View style={styles.inputsSubSection}>
              <Text style={styles.inputLabel}>Zip/Postal Code</Text>
              <ProfileDisplayCredentials
                Title={"Profile zip/postal code"}
                color={"outline"}
              />
            </View>
          </View>

          <View style={styles.submitSection}>
            <DisplayButton
              Title={"Update"}
              onPressChanges={() => console.log("Updated Successfully")}
              color={"primary"}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: colors.white,
    height: "100%",
    paddingHorizontal: 15,
    paddingTop:15,
  },
  profileContent: {
    // backgroundColor: 'pink',
    width: "100%",
    height: "auto",
    alignItems: "justify",
    position: "relative",
    // top: -75,
  },
  profileHeader: {
    // backgroundColor: 'orange',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    color: colors.text,
    fontFamily: fonts.Semibold,
    marginTop: 15,
  },
  memberText: {
    fontSize: 16,
    color: colors.lightText,
    fontFamily: fonts.Medium,
    marginTop: 4,
  },
  editProfileBtn: {
    marginTop: 20,
    backgroundColor: colors.lightText,
    width: "100%",
    height: "auto",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  editProfileBtnText: {
    fontSize: 16,
    letterSpacing: 0.6,
    color: colors.white,
    fontFamily: fonts.Medium,
  },
  inputsSection: {
    // backgroundColor: 'yellow',
    marginTop: 10,
  },

  inputsSubSection: {
    // backgroundColor: 'yellow',
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: fonts.Semibold,
    color: colors.lightText,
    marginTop: 4,
  },
  submitSection: {
    marginTop: 25,
    marginBottom:30,
  },
});
