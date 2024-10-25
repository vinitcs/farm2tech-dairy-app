import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../theme/colors/colors";
import CountQuantity from "../Count/CountQuantity";
import DisplayButton from "../Button/DisplayButton";
import { useNavigation } from "@react-navigation/native";
// import OneTimeOrderProductCard from "../ProductCard/OneTimeOrderProductCard";
import SelectedProductCard from "../ProductCard/SelectedProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setOneTimeOrderQuantity } from "../../../redux/slice/productSlice";

const OneTimeOrder = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const oneTimeOrderQuantity = useSelector(
    (state) => state.product.oneTimeOrderQuantity
  );

  const handleSetCount = (count) => {
    dispatch(setOneTimeOrderQuantity(count));
  };

  return (
    <View style={styles.oneTimeOrderContainer}>
      {/* <OneTimeOrderProductCard /> */}
      <SelectedProductCard />
      <CountQuantity
        title={"Select quantity"}
        count={oneTimeOrderQuantity}
        setCount={handleSetCount}
      />
      <Text style={styles.oneTimeOrderNote}>
        This is a one-time order. Place your order today, and it will be
        delivered the next day.
      </Text>
      <DisplayButton
        Title={"Next"}
        onPressChanges={() => navigation.navigate("BookedItem")}
        color={"primary"}
      />
    </View>
  );
};

export default OneTimeOrder;

const styles = StyleSheet.create({
  oneTimeOrderContainer: {
    gap: 25,
    marginBottom: 20,
  },
  oneTimeOrderNote: {
    fontSize: 12,
    color: colors.lightText,
    textAlign: "justify",
    letterSpacing: 0.2,
  },
});
