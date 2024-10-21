import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
// import { productData } from './ProductInfoData';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import { useSelector } from 'react-redux';

const SelectedProductCard = () => {
     const selectedProduct = useSelector((state) => state.product.selectedProduct);
     const selectedPlanType = useSelector((state) => state.product.selectedPlanType);
     console.log("plan=>", selectedPlanType);
     // console.log("product=>", selectedProduct);

     return (
          <View>
               <View style={styles.box}>
                    <View>
                         <Image source={selectedProduct.uri} style={styles.logo} />
                    </View>
                    <View
                    // style={{backgroundColor:'pink'}}
                    >
                         <Text style={styles.text}>{selectedProduct.name}</Text>
                         <Text style={styles.litreText}>{selectedProduct.litre}L</Text>
                         <View style={{ flexDirection: 'row', gap: 6, marginTop: 6, }}>
                              <Text style={styles.priceText}>{'\u20B9'} {selectedProduct.price}.0</Text>
                              <Text style={styles.priceStrikeThroughText}>{'\u20B9'} {selectedProduct.price}.0</Text>
                              <Text style={styles.priceOffText}>{selectedProduct.price}% off</Text>
                         </View>

                         {selectedPlanType === "One Time Order" ? (
                              <Text style={styles.offerText}>Buy and get Rs.{selectedProduct.price} in per unit</Text>
                         ) : (
                              <Text style={styles.offerText}>Subscribe to save {selectedProduct.price}Rs in per unit</Text>
                         )}
                    </View>
               </View>
          </View>
     )
}

export default SelectedProductCard;

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

     offerText: {
          // backgroundColor:'magenta',
          fontSize: 12,
          color: colors.primary,
          fontFamily: fonts.Bold,
     },
})