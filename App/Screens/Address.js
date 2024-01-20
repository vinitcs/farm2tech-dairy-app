import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors/colors';
import { fonts } from '../../theme/fonts/fonts';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Address = () => {
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

                    }}>
                         <GoBackIcon />

                         <Text style={{
                              fontSize: 14,
                              textAlign: 'center',
                              fontFamily: fonts.Bold,
                         }}>Address</Text>

                         <View style={{
                              marginTop: 15,
                              marginBottom: 15,
                              borderRadius: 12,
                              borderWidth: 1,
                              borderColor: colors.outline,
                              width: '100%',
                              height: 600,
                              alignItems: 'center',
                              padding: 6,
                         }}>

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
                                   paddingVertical:4,
                              }}
                              onPress={() => console.log('added address')}>
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
                              </TouchableOpacity>
                         </View>

                         <View style={{
                              flexDirection: 'column',
                              gap: 10,
                              justifyContent: 'space-between',
                              alignItems: 'center',
                         }}>
                              <TouchableOpacity
                                   onPress={() => navigation.navigate('NewAddress')}
                                   style={{
                                        width: '100%',
                                        backgroundColor: colors.lightText,
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
                                        Add New address
                                   </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                   onPress={() => navigation.navigate('BookedItem')}
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
                                        Next
                                   </Text>
                              </TouchableOpacity>
                         </View>
                    </View>
               </ScrollView>
          </View>
     )
}

export default Address

const styles = StyleSheet.create({
     scrollViewContent: {
          flexGrow: 1,
     },
})