import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
// import { SocialIcon } from 'react-native-elements';
import { fonts } from './../../theme/fonts/fonts';
import { colors } from './../../theme/colors/colors';

const Contact = () => {
     const [text, setText] = React.useState("");
     const [number, setNumber] = React.useState("");
     return (
          <View>
               <View style={styles.container}>
                    <View style={styles.contactContainer}>
                         <Text style={styles.contactUs}>Contact us</Text>
                         <TextInput style={styles.Input}
                              label="Full Name"
                              value={text}
                              mode='outlined'
                              activeOutlineColor={colors.lightText}
                              onChangeText={text => setText(text)}
                         />
                         <TextInput style={styles.Input}
                              label="Mobile Number"
                              value={number}
                              mode='outlined'
                              activeOutlineColor={colors.lightText}
                              onChangeText={text => setNumber(text)}
                         />
                         <TextInput style={styles.Input}
                              label="Email"
                              value={text}
                              mode='outlined'
                              activeOutlineColor={colors.lightText}
                              onChangeText={text => setText(text)}
                         />
                         <TextInput style={styles.Input}
                              label="Message"
                              value={text}
                              mode='outlined'
                              multiline
                              activeOutlineColor={colors.lightText}
                              onChangeText={text => setText(text)}
                         />
                         <View style={styles.buttonContainer}>

                              <Button style={styles.button} mode="contained" onPress={() => console.log('Submit')}>
                                   Submit
                              </Button>
                         </View>
                    </View>
               </View>
               <View style={{
                    marginTop: 30,
                    justifyContent: 'flex-start',
                    // left:12,
               }}>
                    <Text style={{ fontSize: 14, fontFamily: fonts.Bold }}>Address</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.Medium }}>Farm2Tech, Khed, Ratnagiri, 415605</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.Medium }}>farm2tech@gmail.com</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.Medium, fontStyle: 'italic' }}>+91-0000000000</Text>
                    <Text style={{ fontSize: 16, fontFamily: fonts.Regular }}>Time: Mon - Sat  09:00 AM - 09:00 PM </Text>
               </View>

               <Text style={{
                    // backgroundColor:'orange',
                    marginTop: 30,
                    fontSize: 10,
                    position: 'relative',
                    bottom: 4,
                    color: colors.lightText
               }}>
                    Copyrights 2023. Farm2Tech. All Rights Reserved.
               </Text>
          </View>
     )
}

export default Contact

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'yellow',
          flex: 1,
     },

     contactContainer: {
          // backgroundColor: 'purple',
          width: '100%',
          height: 'auto',
          justifyContent: 'space-between',
          alignItems: 'center',
     },

     contactUs: {
          fontSize: 16,
          textAlign: 'center',
          marginTop: 15,
          fontFamily: fonts.Bold,
     },

     Input: {
          width: '100%',
          marginTop: 10,
     },

     buttonContainer: {
          flexDirection: 'row',
     },

     button: {
          marginTop: 10,
          width: '100%',
          backgroundColor: colors.lightText,
          borderRadius: 12,

     },
})