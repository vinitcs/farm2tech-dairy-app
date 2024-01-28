import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { fonts } from './../../../theme/fonts/fonts';
import { colors } from './../../../theme/colors/colors';
// import { productSliderData } from './ProductSliderContent';
import { productDisplayInfoData } from '../ProductDisplayInfo/ProductDisplayInfoContent';

const ProductSlider = () => {
     return (
          <View>
               <Text style={styles.dairyDisplayContainerText}>Dairy Products</Text>
               <ScrollView
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal>
                    {productDisplayInfoData.map((item, idx) => (
                         <TouchableOpacity>
                              <View style={styles.box} key={idx}>
                                   <Image source={item.uri} style={styles.logo} />
                                   <Text style={styles.text}>{item.name}</Text>
                              </View>
                         </TouchableOpacity>
                    ))}
               </ScrollView>
          </View>
     )
}

export default ProductSlider

const styles = StyleSheet.create({
     dairyDisplayContainerText: {
          fontSize: 16,
          textAlign: 'center',
          marginTop: 15,
          fontFamily: fonts.Bold,
     },

     box: {
          // padding: 10,
          margin: 4,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: colors.outline,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 12,

     },
     logo: {
          // backgroundColor:'red',
          resizeMode: 'contain',
          width: 120,
          height: 80,
          marginTop: 10,

     },
     text: {
          // backgroundColor:'brown',
          textAlign: 'center',
          padding: 6,
          fontSize:14,
          fontFamily: fonts.Semibold,
     }
})