import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors/colors';
import { fonts } from '../../theme/fonts/fonts';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import OrderStatus from '../components/OrderStatus/OrderStatus';

const Cart = () => {
  return (
    <View style={{
      backgroundColor:colors.white,
      height:'100%',
    }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          paddingHorizontal: 15,
        }}>

          <GoBackIcon color={colors.lightText} />
          <View>
            <Text style={{
              color:colors.lightText,
              fontSize: 16,
              textAlign: 'center',
              fontFamily: fonts.Bold,
            }}>Orders</Text>
          </View>
        </View>

        <View style={{
          marginTop:15,
          paddingHorizontal: 15,
          marginBottom: 20,
          display: 'flex',
          flexDirection: 'column',
          gap:2,

        }}>
          <OrderStatus />
          <OrderStatus />
          <OrderStatus />
        </View>
      </ScrollView>
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({})