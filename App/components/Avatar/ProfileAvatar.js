import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, } from 'react-native-paper';


const ProfileAvatar = ({size}) => {
     return (
          <View>
               <Avatar.Image source={require('../../../assets/about.jpg')} size={size} />
          </View>
     )
}

export default ProfileAvatar

const styles = StyleSheet.create({})