import { View, Text } from 'react-native';
import React from 'react';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';

export default function Cart() {
  return (
    <View style={{paddingHorizontal:15}}>
      <GoBackIcon/>
      <Text>Cart</Text>
    </View>
  )
}