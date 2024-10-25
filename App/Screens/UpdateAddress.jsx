import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DisplayButton from "../components/Button/DisplayButton";
import UserInput from "../components/Credentials/UserInput";
import { fonts } from "../../theme/fonts/fonts";

const Address = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.label}>Address</Text>
          <UserInput
            placeholder={'Enter address'}
          />
        </View>
        <View>
          <Text style={styles.label}>City</Text>
          <UserInput
            placeholder={'Enter city'}
          />
        </View>
        <View>
          <Text style={styles.label}>Zip/Postal Code</Text>
          <UserInput
            placeholder={'Enter code'}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone</Text>
          <UserInput
            placeholder={'Enter phone'}
          />
        </View>

        <DisplayButton
          Title={"Update"}
          onPressChanges={() => navigation.navigate("BookedItem")}
          color={"primary"}
        />
      </View>
    </ScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  addressContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    marginBottom: 20,
    backgroundColor: colors.white,
    height: "100%",
    gap: 18,

  },
  label: {
    paddingBottom: 6,
    fontSize: 14,
    fontFamily: fonts.Semibold,
    color: colors.lightText,
  }
});
