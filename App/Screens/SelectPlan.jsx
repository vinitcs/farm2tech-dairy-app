import { StyleSheet, Text, View, BackHandler } from "react-native";
import React, { useCallback, useLayoutEffect } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import OneTimeOrder from "../components/SelectPlan/OneTimeOrder";
import Monthly from "../components/SelectPlan/Monthly";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../theme/colors/colors";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { clearMonthlyAndEndDate, clearMonthlyOrderQuantity, clearOneTimeOrderQuantity, clearSelectedPlanType } from "../../redux/slice/productSlice";

const SelectPlan = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const selectedPlanType = route.params?.selectedPlan || "Default Plan";
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(clearSelectedPlanType());
    dispatch(clearOneTimeOrderQuantity());
    dispatch(clearMonthlyOrderQuantity());
    dispatch(clearMonthlyAndEndDate());
    navigation.goBack();
  };

  //When user press back button of mobile device navigation then clearSelectedPlanType gets call.
  useFocusEffect(
    // Custom back handler to override default behavior
    useCallback(() => {
      const onBackPress = () => {
        dispatch(clearSelectedPlanType());
        dispatch(clearOneTimeOrderQuantity());
        dispatch(clearMonthlyOrderQuantity());
        clearMonthlyAndEndDate();

        navigation.goBack();
        return true; // Prevent default back behavior
      };


      // Explicitly for mobile hardware back button event
      const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        backHandler.remove();
      }
    }, [dispatch, navigation])
  );

  // Managing header over here
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header goBackIcon={true} goBackFn={goBack} title={selectedPlanType} />
      ),
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
    <View style={styles.selectPlanContainer}>
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

const styles = StyleSheet.create({
  selectPlanContainer: {
    backgroundColor: colors.white,
    height: "100%",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});
