import { View, Text } from 'react-native';
import React from 'react';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';

export default function Profile() {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <GoBackIcon />
      <Text>Profile</Text>
    </View>
  )
}