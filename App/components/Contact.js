import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';

const Contact = () => {
     const [text, setText] = React.useState("");
     const [number, setNumber] = React.useState("");
     return (
          <View>
               <View style={styles.container}>
                    <View style={styles.aboutContainer}>
                         <Text style={styles.aboutUs}>Contact us</Text>
                         {/* <Image source={require('./../../assets/contact.png')} style={styles.homeImg} /> */}
                         <TextInput style={styles.Input}
                              label="Full Name"
                              value={text}
                              mode='outlined'
                              activeOutlineColor='#4B8E71'
                              onChangeText={text => setText(text)}
                         />
                         <TextInput style={styles.Input}
                              label="Mobile Number"
                              value={number}
                              mode='outlined'
                              activeOutlineColor='#4B8E71'
                              onChangeText={text => setNumber(text)}
                         />
                         <TextInput style={styles.Input}
                              label="Email"
                              value={text}
                              mode='outlined'
                              activeOutlineColor='#4B8E71'
                              onChangeText={text => setText(text)}
                         />
                         <TextInput style={styles.Input}
                              label="Message"
                              value={text}
                              mode='outlined'
                              multiline
                              activeOutlineColor='#4B8E71'
                              onChangeText={text => setText(text)}
                         />
                         <View style={styles.buttonContainer}>

                              <Button style={styles.button} mode="contained" onPress={() => console.log('Submit')}>
                                   Submit
                              </Button>
                              <Button style={styles.button} mode="contained" onPress={() => console.log('Clear')}>
                                   Clear
                              </Button>
                         </View>
                    </View>
               </View>
               <Text style={{ fontSize: 12, fontWeight:'800'}}>Address</Text>
               <Text style={{ fontSize: 14 }}>Farm2Tech, Khed, Ratnagiri, 415605</Text>
               <Text style={{ fontSize: 14 }}>farm2tech@git-india.edu.in</Text>
               <Text style={{ fontSize: 14, fontStyle: 'italic' }}>+91-0000000000</Text>
               <Text style={{ fontSize: 14 }}>Time: Mon - Sat  09:00 AM - 09:00 PM </Text>

               <Text style={{ marginTop: 30, fontSize: 12, fontWeight:'800' }}>Connect us</Text>

               <View style={styles.connectContainer}>
                    <SocialIcon type='twitter' light />
                    <SocialIcon type='linkedin' light />
                    <SocialIcon type='instagram' light />
               </View>

               <Text style={{ marginTop: 30, fontSize: 10, }}>  Copyrights 2023. Farm2Tech. All Rights Reserved.</Text>
          </View>
     )
}

export default Contact

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'yellow',
          flex: 1,
          width: '100%',
          height: 450,
     },

     aboutContainer: {
          // backgroundColor: 'purple',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
     },

     aboutUs: {
          fontSize: 16,
          textAlign: 'center',
          marginTop: 10,
          // height:100,
     },

     homeImg: {
          resizeMode: 'cover',
          width: '100%',
          height: '50%',

     },

     aboutUsDescription: {
          paddingHorizontal: 20,
          textAlign: 'justify',
     },

     Input: {
          width: '100%',
          marginTop: 20,
     },

     buttonContainer: {
          flexDirection: 'row',
     },

     button: {
          margin: 24,
          width: '40%',
          backgroundColor: '#6B9080',
          borderRadius: 12,

     },

     connectContainer: {
          flexDirection: 'row',
     },
})