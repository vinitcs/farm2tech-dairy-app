import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const GoBackIcon = ({color}) => {
     const navigation = useNavigation();
     return (
          <View style={styles.goBackIcon}>
               <TouchableOpacity>
                    <Icon
                         name='arrow-back-outline'
                         type='ionicon'
                         size={28}
                         onPress={() => { navigation.goBack(); }}
                         color={color}
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