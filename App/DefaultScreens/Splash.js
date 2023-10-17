import { StyleSheet, Text,Image, View } from 'react-native'
import React, { useEffect } from 'react';

const Splash = ({navigation}) => {
     useEffect(() => {
          setTimeout(() => {
               navigation.navigate('MainParent');
          }, 2000);
     }, [navigation]);
     return (
          <View style={styles.info}>
              <Image source={require('./../../assets/logo.png')} style={styles.logo} />
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
     },

     logo: {
          resizeMode: 'contain',
          width: 120,
          height: 50,
          alignSelf:'center',
      
        }
})