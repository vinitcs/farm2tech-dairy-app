import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import { ScrollView } from 'react-native-gesture-handler';
import SingleProductPriceAndQuantity from '..//ProductInfo/SingleProductPriceAndQuantity';

const OrderStatus = () => {
     return (
          <View>
               <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
               >
                    <View style={{
                         zIndex: 1,
                    }}>
                         <SingleProductPriceAndQuantity />
                    </View>
                    <View style={{
                         backgroundColor: colors.outline,
                         position: 'relative',
                         top: -12,
                         borderBottomRightRadius: 10,
                         borderBottomLeftRadius: 10,
                         width: '100%',
                         height: 'auto',
                         display: 'flex',
                         flexDirection: 'column',
                         // gap: 2,
                         flexWrap: 'wrap',
                         justifyContent: 'space-between',
                         padding: 6,
                         paddingTop: 14,
                         // marginBottom: 15,
                    }}>
                         <Text style={{
                              fontSize: 16,
                              color: colors.endDate,
                              fontFamily: fonts.Bold

                         }}>
                              Order Status - Pending
                         </Text>
                         <Text style={{
                              fontSize: 14,
                              color: colors.lightText,
                              fontFamily: fonts.Semibold

                         }}>
                              Order Id: 4
                         </Text>
                    </View>
               </ScrollView >
          </View>
     )
}

export default OrderStatus

const styles = StyleSheet.create({})