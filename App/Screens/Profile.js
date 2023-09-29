import { View, Text } from 'react-native';
import React from 'react';
import Header from '../components/Header';

export default function Profile() {
  return (
    <View style={{ padding: 20 }}>
      <Header />
      <Text>Profile</Text>
    </View>
  )
}