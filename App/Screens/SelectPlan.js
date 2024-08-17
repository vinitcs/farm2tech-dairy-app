import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GoBackIcon from "../components/GoBackIcon/GoBackIcon";
import { useRoute } from "@react-navigation/native";
import OneTimeOrder from "../components/SelectPlan/OneTimeOrder";
import Weekly from "../components/SelectPlan/Weekly";
import Monthly from "../components/SelectPlan/Monthly";
import AlternativeDays from "../components/SelectPlan/AlternativeDays";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../theme/colors/colors";

const SelectPlan = () => {
  const route = useRoute();
  const selectedPlanType = route.params?.selectedPlanType || "Default Plan";

  let displayComponent;

  if (selectedPlanType === "One Time Order") {
    displayComponent = <OneTimeOrder />;
  } else if (selectedPlanType === "Weekly") {
    displayComponent = <Weekly />;
  } else if (selectedPlanType === "Monthly") {
    displayComponent = <Monthly />;
  } else if (selectedPlanType === "Alternative Days") {
    displayComponent = <AlternativeDays />;
  } else {
    displayComponent = <Text>Default Component</Text>;
  }

  return (
    <View
      style={{
        backgroundColor: colors.white,
        height:'100%',
        paddingHorizontal: 15,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <GoBackIcon color={colors.lightText} />
        {displayComponent}
      </ScrollView>
    </View>
  );
};

export default SelectPlan;

const styles = StyleSheet.create({});
