import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

const About = () => {
     return (
          <View style={styles.container}>
               <View style={styles.aboutContainer}>
                    <Text style={styles.aboutUs}>About us</Text>
                    <Image source={require('./../../assets/about.png')} style={styles.homeImg} />
                    <Text style={styles.aboutUsDescription}>
                         Farm2Tech aims to harness digitalization and technological advancements in dairy to foster rural development. The review aims to understand the significance of digital technologies in management of dairy products towards end user, identify the challenges and opportunities associated with implementing such projects, and examine existing studies on the impacts of digitalization in rural communities.
                         By implementing these digitalisation solutions, Farm2Tech aims to bridge the technological gap for rural farmers, improving their access to information, markets, and modern dairy practices. Through this integrated approach, Farm2Tech will support rural development in various sector, empowering farmers and fostering sustainable growth in rural communities. Additionally, the project will work to provide training and support to help farmers and consumers adopt and adapt to digital technologies effectively.</Text>
               </View>
          </View>
     )
}

export default About

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'yellow',
          flex: 1,
          width: '100%',
          height: 700,
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
          resizeMode: 'contain',
          width: '100%',
          height: '40%',
     },

     aboutUsDescription: {
          paddingHorizontal: 20,
          textAlign: 'justify',
          fontWeight:'400'
     },
})