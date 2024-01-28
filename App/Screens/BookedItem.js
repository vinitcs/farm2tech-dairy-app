import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors/colors';
import { fonts } from '../../theme/fonts/fonts';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import SingleProductPriceAndQuantity from '../components/ProductInfo/SingleProductPriceAndQuantity';


const BookedItem = () => {
     const navigation = useNavigation();
     return (
          <View>
               <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
               >
                    <View style={{
                         paddingHorizontal: 15,
                         marginBottom: 20,
                         display: 'flex',
                         flexDirection: 'column',
                         gap: 8,

                    }}>
                         <GoBackIcon />
                         <View>
                              <Text style={{
                                   fontSize: 14,
                                   textAlign: 'center',
                                   fontFamily: fonts.Bold,
                              }}>BookedItem</Text>
                         </View>
                         <SingleProductPriceAndQuantity />


                         {/* Address */}
                         <View style={{

                              backgroundColor: colors.outline,
                              width: "100%",
                              height: 'auto',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 4,
                              borderRadius: 12,
                              borderWidth: 1,
                              borderColor: colors.outline,
                              paddingHorizontal: 8,
                              paddingVertical: 4,
                         }}
                              onPress={() => console.log('added address')}>

                              <View>
                                   <Text style={{
                                        fontSize: 14,
                                        color: colors.text,
                                        fontFamily: fonts.Bold
                                   }}>Delivery Address</Text>
                              </View>
                              <View style={{
                                   // backgroundColor:colors.lightText,
                                   width: '92%',
                                   display: 'flex',
                                   flexDirection: 'row',
                                   flexWrap: 'wrap',
                              }}>

                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Medium
                                   }}>xyz plaza B257 Sundarland housing society Nagar xxxxxxxxxx Chiplun 415605</Text>
                              </View>

                              <View style={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   gap: 4,
                              }}>
                                   <Icon
                                        name='call-outline'
                                        type='ionicon'
                                        size={20}
                                        color={colors.lightText}
                                   />
                                   <Text selectable style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Semibold,
                                   }}>91+ 98219210288</Text>
                              </View>
                         </View>

                         {/* Monthly Subcription*/}
                         <View style={{

                              backgroundColor: colors.outline,
                              width: "100%",
                              height: 'auto',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 4,
                              borderRadius: 12,
                              borderWidth: 1,
                              borderColor: colors.outline,
                              paddingHorizontal: 8,
                              paddingVertical: 4,
                         }}>
                              <View>
                                   <Text style={{
                                        fontSize: 14,
                                        color: colors.text,
                                        fontFamily: fonts.Bold
                                   }}>Monthly subscription delivery</Text>
                                   <View style={{
                                        marginTop: 4
                                   }}>
                                        <Text>Start From: </Text>
                                        <Text>End in: </Text>
                                   </View>
                              </View>
                         </View>


                         {/* Pricing Details*/}
                         <View style={{

                              backgroundColor: colors.outline,
                              width: "100%",
                              height: 'auto',
                              display: 'flex',
                              flexDirection: 'cloumn',
                              gap: 4,
                              justifyContent: 'space-between',
                              borderRadius: 12,
                              borderWidth: 1,
                              borderColor: colors.outline,
                              paddingHorizontal: 8,
                              paddingVertical: 4,
                         }}>


                              <View style={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   gap: 4,
                                   justifyContent: 'space-between',
                              }}>

                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Medium
                                   }}>MRP</Text>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Semibold
                                   }}> {'\u20B9'} 40</Text>

                              </View>


                              <View style={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   gap: 4,
                                   justifyContent: 'space-between',
                              }}>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Medium
                                   }}>Discount</Text>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Semibold
                                   }}> {'\u20B9'} 5</Text>
                              </View>

                              <View style={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   gap: 4,
                                   justifyContent: 'space-between',
                              }}>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Medium
                                   }}>Tax</Text>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Semibold
                                   }}> {'\u20B9'} 1.5</Text>
                              </View>

                              <View style={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   gap: 4,
                                   justifyContent: 'space-between',
                              }}>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Medium
                                   }}>QTY</Text>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Semibold
                                   }}> x3</Text>
                              </View>

                              <View style={{
                                   display: 'flex',
                                   flexDirection: 'row',
                                   gap: 4,
                                   justifyContent: 'space-between',
                              }}>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Medium
                                   }}>Total Amount</Text>
                                   <Text style={{
                                        fontSize: 16,
                                        color: colors.text,
                                        fontFamily: fonts.Semibold
                                   }}> {'\u20B9'} 40.40</Text>
                              </View>

                         </View>

                         <TouchableOpacity
                              onPress={() => navigation.navigate('Cart')}
                              style={{
                                   width: '100%',
                                   backgroundColor: colors.primary,
                                   borderRadius: 12,
                                   paddingVertical: 10,
                                   // alignItems:'center'
                              }}>
                              <Text
                                   style={{
                                        // backgroundColor:'pink',
                                        fontFamily: fonts.Medium,
                                        fontSize: 17.5,
                                        color: colors.white,
                                        textAlign: 'center',
                                   }}>
                                   Add to Cart
                              </Text>
                         </TouchableOpacity>
                    </View>
               </ScrollView >
          </View >
     )
}

export default BookedItem

const styles = StyleSheet.create({})