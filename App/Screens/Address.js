import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import GoBackIcon from "../components/GoBackIcon/GoBackIcon";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import AddressList from "../components/Address/AddressList";
import DisplayButton from "../components/Button/DisplayButton";

const Address = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: "100%",
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          <GoBackIcon color={colors.lightText} />

          <Text
            style={{
              color: colors.lightText,
              fontSize: 16,
              textAlign: "center",
              fontFamily: fonts.Bold,
            }}
          >
            Address
          </Text>

          <ScrollView
            style={{
              // backgroundColor:colors.lightText,
              marginTop: 15,
              marginBottom: 15,
              // borderRadius: 12,
              // borderWidth: 1,
              // borderColor: colors.outline,
              width: "100%",
              height: 500,
            }}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true}
          >
            <AddressList />
          </ScrollView>

          <View
            style={{
              flexDirection: "column",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: colors.lightText,
                textAlign: "justify",
                letterSpacing: 0.2,
              }}
            >
              Note: You can add up to two addresses. To add a new address, delete one of the currently listed addresses. 
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
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
});
