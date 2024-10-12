import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { productData } from './ProductInfoData';
import {colors} from '../../../theme/colors/colors';
import {fonts} from '../../../theme/fonts/fonts';

const SingleProductPriceInfo = () => {
     return (
          <View>
               {productData.map((item, idx) => (
                    <View style={styles.box} key={idx} >
                         <View>
                              <Image source={item.uri} style={styles.logo} />
                         </View>
                         <View
                         // style={{backgroundColor:'pink'}}
                         >
                              <Text style={styles.text}>{item.name}</Text>
                              <Text style={styles.litreText}>{item.litre}L</Text>
                              <View style={{ flexDirection: 'row', gap: 6, marginTop: 6, }}>
                                   <Text style={styles.priceText}>{'\u20B9'} {item.price}.0</Text>
                                   <Text style={styles.priceStrikeThroughText}>{'\u20B9'} {item.price}.0</Text>
                                   <Text style={styles.priceOffText}>{item.price}% off</Text>
                              </View>
                              <Text style={styles.priceSubscribeText}>Subscribe to save {item.price}Rs in per unit</Text>
                         </View>
                    </View>
               ))}
          </View>
     )
}

export default SingleProductPriceInfo

const styles = StyleSheet.create({

     box: {
          // backgroundColor: 'blue',
          padding: 10,
          borderRadius: 12,
          borderWidth: 0.6,
          borderColor: colors.outline,
          justifyContent: 'flex-start',
          width: '100%',
          height: 'auto',
          flexDirection: 'row',
          gap: 10,
     },

     logo: {
          // backgroundColor: 'yellow',
          resizeMode: 'contain',
          width: 90,
          height: 90,


     },
     text: {
          // backgroundColor:'blue',
          fontSize: 16,
          color: colors.text,
          fontFamily: fonts.Semibold,

     },

     litreText: {
          // backgroundColor:'violet',
          fontSize: 14,
          color: colors.lightText,
          fontFamily: fonts.Medium,
     },

     priceText: {
          // backgroundColor:'magenta',
          fontSize: 18,
          color: colors.black,
          fontFamily: fonts.Semibold,
     },

     priceStrikeThroughText: {
          // backgroundColor:'magenta',
          fontSize: 14,
          color: colors.lightText,
          fontFamily: fonts.Semibold,
          textDecorationLine: 'line-through'
     },

     priceOffText: {
          // backgroundColor:'magenta',
          fontSize: 14,
          color: colors.primary,
          fontFamily: fonts.Semibold,
     },

     priceSubscribeText: {
          // backgroundColor:'magenta',
          fontSize: 12,
          color: colors.primary,
          fontFamily: fonts.Bold,
     },
})