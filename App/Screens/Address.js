import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AddressList from "../components/Address/AddressList";
import DisplayButton from "../components/Button/DisplayButton";

const Address = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.addressContainer}>
        <ScrollView
          style={styles.addressList}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={true}
        >
          <AddressList />
        </ScrollView>

        <View style={styles.addressBottomBtns}>
          <Text style={styles.note}>
            Note: You can add up to two addresses. To add a new address, delete
            one of the currently listed addresses.
          </Text>
          <DisplayButton
            Title={"Add New address"}
            onPressChanges={() => navigation.navigate("NewAddress")}
            color={"lightText"}
          />

          <DisplayButton
            Title={"Next"}
            onPressChanges={() => navigation.navigate("BookedItem")}
            color={"primary"}
          />
        </View>
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
    marginBottom: 20,
    backgroundColor: colors.white,
    height: "100%",
  },
  addressList: {
    // backgroundColor:colors.lightText,
    marginTop: 15,
    marginBottom: 15,
    // borderRadius: 12,
    // borderWidth: 1,
    // borderColor: colors.outline,
    width: "100%",
    height: 500,
  },
  addressBottomBtns: {
    gap: 10,
    justifyContent: "space-between",
  },
  note: {
    fontSize: 12,
    color: colors.lightText,
    textAlign: "justify",
    letterSpacing: 0.2,
  },
});
