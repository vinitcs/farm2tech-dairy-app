import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Splash = ({navigation}) => {
     useEffect(() => {
          setTimeout(() => {
               navigation.navigate('MainParent');
          }, 2000);
     }, [navigation]);
     return (
          <View style={styles.info}>
               <ActivityIndicator animating={true} color='#4B8E71' size='large'/>
          </View>
     )
}

export default Splash

const styles = StyleSheet.create({
     info: {
          flex: 1,
          padding: 12,
          alignContent:'center',
          textAlign:'center',
          justifyContent:'center',
     }
})