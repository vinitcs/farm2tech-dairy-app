import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import { productDataAndQuantity } from './ProductInfoData';

const BookedProductCard = () => {
     return (
          <View >
               {productDataAndQuantity.map((item, idx) => (
                    <View style={styles.box} key={idx} >
                         <View>
                              <Image source={item.uri} style={styles.logo} />
                         </View>
                         <View
                         // style={{backgroundColor:'pink'}}
                         >
                              <Text style={styles.text}>{item.name}</Text>
                              <View style={{ flexDirection: 'row', gap: 6, marginTop: 6, }}>
                                   <Text style={styles.litreText}>{item.litre}L</Text>
                                   <Text style={styles.QuantityText}>QTY: {item.qty}</Text>
                              </View>
                              <Text style={styles.priceText}>{'\u20B9'} {item.price}</Text>
                              {/* <Text style={styles.priceSubscribeText}>Subscribe to save {item.price}Rs in per unit</Text> */}
                         </View>
                    </View>
               ))}
          </View>
     )
}

export default BookedProductCard

const styles = StyleSheet.create({
     box: {
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 12,
          borderWidth: 0.4,
          borderColor: colors.outline,
          justifyContent: 'flex-start',
          width: '100%',
          height: 'auto',
          flexDirection: 'row',
          gap: 10,
          zIndex:1,
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

     QuantityText: {
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
          marginTop:4,
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

     // priceSubscribeText: {
     //      // backgroundColor:'magenta',
     //      fontSize: 12,
     //      color: colors.primary,
     //      fontFamily: fonts.Bold,
     // },
})