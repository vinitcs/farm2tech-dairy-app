import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { React, useState } from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import { colors } from '../../../theme/colors/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { fonts } from '../../../theme/fonts/fonts';
import { productData } from './ProductInfoData';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";


const ProductInfo = () => {
     const navigation = useNavigation();
     const [visible, setVisible] = useState(false);
     // const selectPlanType = ['One Time Order', 'Weekly', 'Monthly', 'Alternative Days'];
     const selectPlanType = ['One Time Order', 'Monthly'];

     const handlePlanTypePress = (selectedPlanType) => {
          setVisible(false); // Close the modal bottom sheet
          navigation.navigate('SelectPlan', { selectedPlanType });
     };

     function renderModal() {
          return (
               <View>
                    <Modal
                         isVisible={visible}
                         onBackButtonPress={() => {
                              setVisible(false);
                         }}
                         animationIn={'slideInUp'}
                         backdropColor='blur'
                         // deviceHeight={'auto'}
                         // animationInTiming={400}
                         useNativeDriverForBackdrop={true}
                         style={{
                              backgroundColor: colors.outline,
                              flex: 1,
                              width: '100%',
                              height:'auto',
                              // height: 200,
                              margin: 0,
                              position: 'absolute',
                              bottom: 0,
                              borderTopRightRadius: 20,
                              borderTopLeftRadius: 20,
                         }}>
                         <View style={{
                              // backgroundColor: 'yellow',
                              paddingHorizontal: 15,
                              // top:0
                         }}>
                              <View
                                   style={{
                                        // backgroundColor:'red',
                                        width: '100%',
                                        flexDirection: 'row-reverse',
                                        justifyContent: 'space-between',
                                        // marginTop: 6

                                   }}>
                                   <TouchableOpacity>
                                        <Icon
                                             name='close-outline'
                                             type='ionicon'
                                             size={35}
                                             onPress={() => { setVisible(false); }}
                                        />
                                   </TouchableOpacity>
                                   <Text style={{
                                        // backgroundColor:'blue',
                                        fontSize: 14,
                                        fontFamily: fonts.Bold,
                                        marginVertical: 6,
                                        marginLeft: 6,
                                        color: colors.primary
                                   }}>Select Plan Type</Text>
                              </View>
                              <View>
                                   <View style={{
                                        flexDirection: 'column',
                                        gap: 14,
                                        marginVertical: 10
                                   }}>
                                        {selectPlanType.map((name, idx) => (
                                             <TouchableOpacity key={idx} style={{
                                                  // backgroundColor: colors.lightText,
                                                  padding: 10,
                                                  borderRadius: 12,
                                                  borderWidth: 0.5,
                                                  borderColor: colors.lightText,
                                                  justifyContent: 'flex-start',
                                                  width: '100%',
                                                  height: 'auto',
                                                  flexDirection: 'row',
                                                  gap: 14,
                                             }}
                                                  onPress={() => {
                                                       handlePlanTypePress(name);

                                                  }}
                                             >
                                                  <Icon
                                                       name='calendar'
                                                       type='ionicon'
                                                       size={24}
                                                       color={colors.lightText}
                                                  />
                                                  <Text style={{
                                                       // backgroundColor:'blue',
                                                       fontSize: 18,
                                                       fontFamily: fonts.Regular,
                                                  }}>
                                                       {name}
                                                  </Text>
                                             </TouchableOpacity>
                                        ))}
                                   </View>
                              </View>
                         </View>
                    </Modal>
               </View>
          )
     }


     return (
          <View>
               <View style={styles.container}>
                    <Text style={styles.dairyDisplayContainerText}>Products Info</Text>

                    <View style={styles.boxContainer}>
                         {productData.map((item, idx) => (
                              <View style={styles.box} key={idx} >
                                   <View>
                                        <Image source={item.uri} style={styles.logo} />
                                   </View>
                                   <View
                                   // style={{backgroundColor:'pink'}}
                                   >
                                        <Text style={styles.text}>{item.name}</Text>
                                        <Text style={styles.litreText}>{item.litre}/L</Text>
                                        <View style={{ flexDirection: 'row', gap: 6, marginTop: 6, }}>
                                             <Text style={styles.priceText}>{'\u20B9'} {item.price}/L</Text>
                                             <Text style={styles.priceStrikeThroughText}>{'\u20B9'} {item.price}/L</Text>
                                             <Text style={styles.priceOffText}>{item.price}% off</Text>
                                        </View>
                                        <Text style={styles.priceSubscribeText}>Subscribe to save {item.price}Rs in per unit</Text>
                                   </View>
                              </View>
                         ))}

                         <View style={styles.productDescription}>
                              <Text style={{ fontFamily: fonts.Semibold, fontSize: 16 }}>Description</Text>
                              <Text style={{ fontFamily: fonts.Light, fontSize: 14, textAlign: 'justify' }}>Experience dairy perfection with our fresh, creamy milk products. From wholesome milk to delectable dairy treats, we've got your cravings covered. Vist us for the the finest in Farm2Tech!</Text>
                         </View>

                         <View style={styles.productDescription}>
                              <Text style={{ fontFamily: fonts.Semibold, fontSize: 16 }}>Declaimer</Text>
                              <Text style={{ fontFamily: fonts.Light, fontSize: 14, textAlign: 'justify' }}>Discover pure delight with our handpicked selection of premium milk products. Our commitment to quality ensures that you and your family receive only the freshest and finest dairy goodness. From classic milk cartoons to an array of Farm2Tech, our shelves are stocked with products that elevate your taste experience. Taste the difference that quality makes - visit our store today and savor the essence of Farm2Tech!</Text>
                         </View>
                         <View
                              style={{
                                   // backgroundColor:'blue',
                                   width: '100%',
                                   height: 'auto',
                                   justifyContent: 'space-between',
                                   alignItems: 'center',

                              }}>
                              <TouchableOpacity
                                   onPress={() => setVisible(true)}
                                   style={{
                                        width: 340,
                                        backgroundColor: colors.primary,
                                        borderRadius: 12,
                                        paddingVertical: 10,

                                   }}>
                                   <Text
                                        style={{
                                             // backgroundColor:'pink',
                                             fontFamily: fonts.Medium,
                                             fontSize: 17.5,
                                             color: colors.white,
                                             textAlign: 'center',
                                        }}>
                                        Subscribe
                                   </Text>
                              </TouchableOpacity>
                         </View>
                         {renderModal()}
                    </View >
               </View>
          </View>
     )
}

export default ProductInfo

const styles = StyleSheet.create({
     container: {
          // backgroundColor:'purple',
          flex: 1,
          height: 'auto',
     },

     dairyDisplayContainerText: {
          fontSize: 14,
          textAlign: 'center',
          marginTop: 10,
          fontFamily: fonts.Bold,
     },

     boxContainer: {
          // backgroundColor: 'red',
          width: '100%',
          height: 'auto',
          padding: 2,
          flexDirection: 'column',
          justifyContent: 'space-between',
          rowGap: 20,
          marginTop: 10,
     },

     box: {
          // backgroundColor: 'blue',
          padding: 10,
          borderRadius: 12,
          borderWidth: 1,
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
          fontFamily: fonts.Semibold,
     },

     productDescription: {
          // backgroundColor: 'blue',
          paddingHorizontal: 4,
          justifyContent: 'flex-start',
          width: '100%',
          height: 'auto',
          flexDirection: 'column',
     },
})