import { StyleSheet, Text, View } from "react-native";
import { React, useEffect, useState } from "react";
import { fonts } from "../../../theme/fonts/fonts";
import { colors } from "../../../theme/colors/colors";
import CountQuantity from "../Count/CountQuantity";
import MonthlySelectCalendar from "../Calendar/MonthlySelectCalendar";
import { useNavigation } from "@react-navigation/native";
import DisplayButton from "../Button/DisplayButton";
import SelectedProductCard from "../ProductCard/SelectedProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyAndEndDate, setMonthlyOrderQuantity } from "../../../redux/slice/productSlice";

const MonthlyPlan = () => {
  // console.log("Monthly Plan rendered+++");

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const monthlyOrderQuantity = useSelector(
    (state) => state.product.monthlyOrderQuantity
  );

  const handleSetCount = (count) => {
    dispatch(setMonthlyOrderQuantity(count));
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (startDate && endDate) {
      const formatStartDate = startDate.toDateString() || "";
      const formatEndDate = endDate.toDateString() || "";

      dispatch(setMonthlyAndEndDate({ startDate: formatStartDate, endDate: formatEndDate }));
    }
  }, [startDate, endDate, dispatch]);


  return (
    <View style={styles.monthlyContainer}>
      <SelectedProductCard />
      <CountQuantity
        title={"Select per day quantity"}
        count={monthlyOrderQuantity}
        setCount={handleSetCount}
      />
      <View style={styles.calendarSection}>
        <MonthlySelectCalendar
          onDateChange={(startDate, endDate) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
        />
        <View style={styles.dateDisplayBox}>
          <Text style={styles.dateDisplayTitle}>Start Date:</Text>
          <Text style={styles.startDateValue}>
            {startDate ? startDate.toDateString() : ""}
          </Text>
        </View>
        <View style={styles.dateDisplayBox}>
          <Text style={styles.dateDisplayTitle}>End Date:</Text>
          <Text style={styles.endDateValue}>
            {endDate ? endDate.toDateString() : ""}
          </Text>
        </View>
      </View>

      <DisplayButton
        Title={"Next"}
        onPressChanges={() => navigation.navigate("BookedItem")}
        color={"primary"}
      />
    </View>
  );
};

export default MonthlyPlan;

const styles = StyleSheet.create({
  monthlyContainer: {
    gap: 25,
    paddingVertical: 15,
    marginBottom: 20,
  },
  calendarSection: {
    // backgroundColor:'orange',
    width: "100%",
    height: "auto",
    flexDirection: "column",
    gap: 4,
    // marginTop:20,
  },
  dateDisplayBox:{
    flexDirection:"row",
    gap:6,
  },
  dateDisplayTitle: {
    color: colors.lightText,
    fontFamily: fonts.Bold,
  },
  startDateValue: {
    color: colors.primary,
    fontFamily: fonts.Bold,
  },
  endDateValue: {
    color: colors.lightText,
    fontFamily: fonts.Bold,
  },
});
