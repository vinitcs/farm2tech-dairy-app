import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../../../theme/colors/colors';

const MonthlySelectCalendar = ({ onDateChange }) => {
  const minDate = new Date(); // Today
  const maxDate = new Date(2030, 1, 3);

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleDateChange = (startDate) => {
    // Calculate end date (29 days from the selected start date)
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 29);

    // Update selected start and end dates
    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);

    // Call the callback with start and end dates
    onDateChange(new Date(startDate), new Date(endDate));
  };

  const customDatesStyles = [];
  if (selectedStartDate) {
    customDatesStyles.push({
      date: selectedStartDate,
      style: { backgroundColor: colors.primary, textColor: colors.white },
      containerStyle: [],
    });
  }
  if (selectedEndDate) {
    customDatesStyles.push({
      date: selectedEndDate,
      style: { backgroundColor: colors.endDate, textColor: colors.white },
      containerStyle: [],
    });
  }

  return (
    <View>
      <CalendarPicker
        previousTitle='Prev'
        nextTitle='Next'
        enableDateChange
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor={colors.lightText}
        selectedDayColor={colors.primary}
        selectedDayTextColor={colors.white}
        onDateChange={handleDateChange}
        customDatesStyles={customDatesStyles}
      />
    </View>
  );
};

export default MonthlySelectCalendar;

const styles = StyleSheet.create({
  dateText: {
    fontSize: 16,
    marginTop: 10,
  },
});
