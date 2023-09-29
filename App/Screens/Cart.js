import { View, Text } from 'react-native';
import React from 'react';
import Header from '../components/Header';

export default function Cart() {
  return (
    <View style={{padding:20}}>
      <Header/>
      <Text>Cart</Text>
    </View>
  )
}