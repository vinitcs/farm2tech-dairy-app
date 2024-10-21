import { StyleSheet, Text, View } from "react-native";
import { React, useState } from "react";
import { fonts } from "../../../theme/fonts/fonts";
import { colors } from "../../../theme/colors/colors";
import CountQuantity from "../Count/CountQuantity";
import MonthlySelectCalendar from "../Calendar/MonthlySelectCalendar";
import { useNavigation } from "@react-navigation/native";
import DisplayButton from "../Button/DisplayButton";
// import MonthlyProductCard from "../ProductCard/MonthlyProductCard";
import SelectedProductCard from "../ProductCard/SelectedProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyOrderQuantity } from "../../../redux/slice/productSlice";

const Monthly = () => {
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

  return (
    <View style={styles.monthlyContainer}>
      {/* <MonthlyProductCard/> */}
      <SelectedProductCard />
      <CountQuantity
        title={"Select Per Day Quantity"}
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
        <Text style={styles.dateDisplayTitle}>
          Start Date:
          <Text style={styles.startDateValue}>
            {startDate ? startDate.toDateString() : ""}
          </Text>
        </Text>
        <Text style={styles.dateDisplayTitle}>
          End Date:
          <Text style={styles.endDateValue}>
            {endDate ? endDate.toDateString() : ""}
          </Text>
        </Text>
      </View>

      <DisplayButton
        Title={"Next"}
        onPressChanges={() => navigation.navigate("Address")}
        color={"primary"}
      />
    </View>
  );
};

export default Monthly;

const styles = StyleSheet.create({
  monthlyContainer: {
    gap: 25,
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
  dateDisplayTitle: {
    color: colors.lightText,
    fontFamily: fonts.Semibold,
    fontSize: 14,
    letterSpacing: 1,
  },
  startDateValue: {
    color: colors.primary,
    fontFamily: fonts.Semibold,
  },
  endDateValue: {
    color: colors.primary,
    fontFamily: fonts.Bold,
  },
});
