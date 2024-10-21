import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar, } from 'react-native-paper';


const ProfileAvatar = ({size}) => {
     return (
          // <>
               <Avatar.Image source={require('../../../assets/profile-img.jpg')} size={size} />
          // </>
     )
}

export default ProfileAvatar

const styles = StyleSheet.create({})