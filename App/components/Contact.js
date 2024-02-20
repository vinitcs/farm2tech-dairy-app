import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from '@rneui/themed';
import { fonts } from './../../theme/fonts/fonts';
import { colors } from './../../theme/colors/colors';

const Contact = () => {
     const [text, setText] = React.useState("");
     const [number, setNumber] = React.useState("");
     return (
          <View>
               <View style={styles.container}>
                    <Text style={styles.contactUs}>Contact us</Text>
                    <View style={styles.contactMail}>
                         <Text style={{ fontSize: 14, fontFamily: fonts.Medium }}>You can contact us through Email:</Text>
                         <Text style={{ fontSize: 14, fontFamily: fonts.Bold, }} selectable={true}>farm2tech@gmail.com <Text style={{ fontSize: 14, fontFamily: fonts.Medium, }}>, we will reply in 2-3 working days</Text></Text>
                    </View>

                    <View style={styles.addressContainer}>
                         <View style={styles.addressContent}>

                              <Icon
                                   name='location-outline'
                                   type='ionicon'
                                   // size={20}
                                   color={colors.primary}
                              />
                              <Text style={{ fontSize: 16, fontFamily: fonts.Medium }}>Address: Farm2Tech, Khed, Ratnagiri, 415605</Text>
                         </View>
                         <View style={styles.addressContent}>

                              <Icon
                                   name='call-outline'
                                   type='ionicon'
                                   // size={20}
                                   color={colors.primary}
                              />
                              <Text style={{ fontSize: 16, fontFamily: fonts.Medium, }}>Phone: +91-0000000000</Text>
                         </View>
                         <View style={styles.addressContent}>

                              <Icon
                                   name='time-outline'
                                   type='ionicon'
                                   // size={20}
                                   color={colors.primary}
                              />
                              {/* <Text style={{ fontSize: 16, fontFamily: fonts.Regular }}>Time: Mon - Sat  09:00 AM - 09:00 PM </Text> */}
                              <Text style={{ fontSize: 16, fontFamily: fonts.Regular }}>Open: 24 hours</Text>
                         </View>
                    </View>

                    <View style={{
                         // backgroundColor:'orange',
                         width: '100%',
                         height: 'auto',
                         marginTop: 10,
                    }}>

                         <Text style={{
                              fontSize: 10,
                              color: colors.lightText
                         }}>
                              Copyrights 2023. Farm2Tech. All Rights Reserved.
                         </Text>
                    </View>
               </View>
          </View>
     )
}

export default Contact

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'yellow',
          // flex: 1,
          display:'flex',
          flexDirection:'column',
          width: '100%',
          height: 300,

     },

     contactUs: {
          fontSize: 16,
          textAlign: 'center',
          fontFamily: fonts.Bold,
     },

     contactMail: {
          // backgroundColor:'green',
          marginTop: 10,
          width: '100%',
          height: 'auto',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
     },

     addressContainer: {
          // backgroundColor: 'orange',
          width: '100%',
          height: 'auto',
          // justifyContent: 'space-between',
          // alignItems: 'center',
          borderRadius: 12,
          borderWidth: 1,
          borderColor: colors.lightText,
          marginTop: 10,
     },
     addressContent: {
          justifyContent: 'flex-start',
          width: '100%',
          height: 'auto',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 8,
          paddingHorizontal: 6,
          paddingVertical: 6,
     }
})