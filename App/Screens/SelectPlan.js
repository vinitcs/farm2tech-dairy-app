import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import OneTimeOrder from "../components/SelectPlan/OneTimeOrder";
import Monthly from "../components/SelectPlan/Monthly";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../theme/colors/colors";
import Header from "../components/Header";

const SelectPlan = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const selectedPlanType = route.params?.selectedPlanType || "Default Plan";

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <Header goBackIcon={true} title={selectedPlanType} />,
    });
  }, [navigation, selectedPlanType]);

  let displayComponent;

  if (selectedPlanType === "One Time Order") {
    displayComponent = <OneTimeOrder />;
  } else if (selectedPlanType === "Monthly") {
    displayComponent = <Monthly />;
  } else {
    displayComponent = <Text>Default Component</Text>;
  }

  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: "100%",
        paddingHorizontal: 15,
        paddingTop:15,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {displayComponent}
      </ScrollView>
    </View>
  );
};

export default SelectPlan;

const styles = StyleSheet.create({});
