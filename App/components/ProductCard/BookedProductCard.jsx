import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import { productDataAndQuantity } from './ProductInfoData';
import { useSelector } from 'react-redux';

const BookedProductCard = () => {
     const selectedProduct = useSelector((state) => state.product.selectedProduct);
     const selectedPlanType = useSelector((state) => state.product.selectedPlanType);
     const oneTimeOrderQuantity = useSelector((state) => state.product.oneTimeOrderQuantity);
     const monthlyOrderQuantity = useSelector((state) => state.product.monthlyOrderQuantity);

     // Check if selectedProduct is not null or undefined
     if (!selectedProduct) {
          return null; // Return null if no product is selected to avoid rendering the component
     }

     return (
          <View >
               {/* {productDataAndQuantity.map((item, idx) => ( */}
               <View style={styles.box}>
                    <View>
                         <Image source={selectedProduct.uri} style={styles.logo} />
                    </View>
                    <View
                    // style={{backgroundColor:'pink'}}
                    >
                         <Text style={styles.text}>{selectedProduct.name}</Text>
                         <View style={{ flexDirection: 'row', gap: 6, marginTop: 6, }}>
                              <Text style={styles.litreText}>{selectedProduct.litre}L</Text>
                              <Text style={styles.QuantityText}>QTY: {selectedPlanType === "Monthly" ? monthlyOrderQuantity : oneTimeOrderQuantity}</Text>
                         </View>
                         <Text style={styles.priceText}>{'\u20B9'} {selectedProduct.price}</Text>
                         <Text style={styles.selectedPlan}>Selected Plan: <Text style={styles.highlightSelectedPlan}>{selectedPlanType}</Text></Text>
                    </View>
               </View>
               {/* ))} */}
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
          zIndex: 1,
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
          marginTop: 4,
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

     selectedPlan: {
          // backgroundColor:'magenta',
          fontSize: 12,
          color: colors.lightText,
          fontFamily: fonts.Bold,
     },
     highlightSelectedPlan: {
          color: colors.primary,
     }
})