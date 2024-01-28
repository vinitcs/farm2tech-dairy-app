import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme//fonts/fonts';
import { addressListData } from './AddressListInfo';

const AddressList = () => {
     return (
          <View style={{
               // backgroundColor:colors.error,
               alignItems: 'center',
               justifyContent: 'space-between',
               marginTop: 6,
          }}>
               {addressListData.map((item, idx) => (
                    <TouchableOpacity style={{
                         backgroundColor: colors.outline,
                         width: 350,
                         height: 'auto',
                         display: 'flex',
                         flexDirection: 'column',
                         gap: 4,
                         borderRadius: 12,
                         borderWidth: 1,
                         borderColor: colors.outline,
                         paddingHorizontal: 8,
                         paddingVertical: 8,
                         marginBottom: 10,
                    }}
                         key={idx}
                         onPress={() => console.log('added address')}
                    >
                         <View style={{
                              position: 'absolute',
                              right: 1,
                         }}>
                              <Icon
                                   name='close-outline'
                                   type='ionicon'
                                   size={30}
                                   color={colors.lightText}
                                   onPress={() => console.log('delete address')}
                              />
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
                              }}>{item.address}</Text>
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
                              }}>91+ {item.phone}</Text>
                         </View>
                    </TouchableOpacity>
               ))}
          </View>
     )
}

export default AddressList

const styles = StyleSheet.create({})