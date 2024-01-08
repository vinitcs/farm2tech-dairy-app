import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';
import { fonts } from '../../../theme/fonts/fonts';
import { colors } from '../../../theme/colors/colors';
import { productData } from './productInfoMonthly';
import CountQuantity from '../Count/CountQuantity';
import MonthlySelectCalendar from '../Calendar/MonthlySelectCalendar';
import SingleProductPriceInfo from '../ProductInfo/SingleProductPriceInfo';
import { useNavigation } from '@react-navigation/native';

const Monthly = () => {
  const navigation = useNavigation();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <View style={{
      flexDirection: 'column',
      gap: 30,
      marginBottom: 20,

    }}>
      <View style={{
        // position:'absolute'
        // backgroundColor: 'red',
        width: '100%',
        height: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',

      }}>
        <Text style={{
          fontSize: 14,
          fontSize: 14,
          textAlign: 'center',
          fontFamily: fonts.Bold,
        }}>Monthly</Text>
      </View>

      <SingleProductPriceInfo />

      <View style={{
        // backgroundColor:'cyan',
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        gap: 4,
        // marginTop:10,
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 12,
          fontFamily: fonts.Medium
        }}>
          Select Per Day Quantity
        </Text>
        <CountQuantity />
      </View>

      <View style={{
        // backgroundColor:'orange',
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        gap: 4,
        // marginTop:20,
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 12,
          fontFamily: fonts.Medium
        }}>
          Select start day
        </Text>
        <MonthlySelectCalendar onDateChange={(startDate, endDate) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        />
        <Text style={{ fontFamily: fonts.Regular }}>Start Date:
          <Text style={{ color: colors.primary, fontFamily:fonts.Semibold  }}> {startDate ? startDate.toDateString() : ''}</Text>
        </Text>
        <Text style={{ fontFamily: fonts.Regular }}>End Date:
          <Text style={{ color: colors.primary, fontFamily:fonts.Bold }}> {endDate ? endDate.toDateString() : ''}</Text>
        </Text>
      </View>
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={{
            width: '100%',
            backgroundColor: colors.primary,
            borderRadius: 12,
            paddingVertical: 10,
            // alignItems:'center'
          }}>
          <Text
            style={{
              // backgroundColor:'pink',
              fontFamily: fonts.Medium,
              fontSize: 17.5,
              color: colors.white,
              textAlign: 'center',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Monthly

const styles = StyleSheet.create({})