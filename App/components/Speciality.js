import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Speciality = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.specialityTitle}>Cow and Buffalo Milk</Text>
               <Text style={styles.specialityDescription}>We provide cow and buffalo milk that cater to consumers who put a premium on taste, nutrition, health, craftmanship and sheer indulgence.</Text>
               {/* <Text style={styles.specialityDescription}>Price depends on custom </Text> */}
 
               <View style={styles.boxContainer}>
                    <TouchableOpacity>
                         <View style={styles.box}>
                              <Image source={require('./../../assets/cow-milk.png')} style={styles.logo} />
                              <Text style={styles.text}>Cow milk</Text>
                         </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                         <View style={styles.box}>
                              <Image source={require('./../../assets/buffalo-milk.png')} style={styles.logo} />
                              <Text style={styles.text}>Buffalo milk</Text>
                         </View>
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default Speciality

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'brown',
          flex: 1,
          width: '100%',
          height: 400,
          marginTop: 20,
     },

     specialityTitle: {
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
          color: '#4B8E71',
     },

     specialityDescription: {
          fontSize: 10,
          textAlign: 'center',
          marginTop: 5,
          fontWeight: '500',
          paddingHorizontal: 35,
     },


     boxContainer: {
          // backgroundColor: 'red',
          width: '100%',
          padding: 2,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 10,
     },

     box: {
          backgroundColor: '#F0F8FF',
          padding: 10,
          margin: 12,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 250,
     },

     logo: {
          // backgroundColor: 'yellow',
          resizeMode: 'cover',
          width: 100,
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',


     },
     text: {
          // backgroundColor:'blue',
          width: 100,
          paddingTop: 5,
          textAlign: 'center',
          fontSize: 16,
     },

})