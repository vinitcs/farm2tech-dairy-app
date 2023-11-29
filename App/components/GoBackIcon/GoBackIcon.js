import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
// import {  } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import { colors } from '../../../theme/colors/colors';
import { useNavigation } from '@react-navigation/native';

const GoBackIcon = () => {
     const navigation = useNavigation();
     return (
          <View style={styles.goBackIcon}>
               <TouchableOpacity>
                    <Icon
                         name='arrow-back-outline'
                         type='ionicon'
                         size={30}
                         onPress={() => { navigation.goBack(); }}
                    />
               </TouchableOpacity>
          </View>
     )
}

export default GoBackIcon

const styles = StyleSheet.create({
     goBackIcon: {
          // backgroundColor:"pink",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: 15,

     }
})