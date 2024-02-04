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
import SingleProductPriceInfo from './SingleProductPriceInfo';
import DisplayButton from '../Button/DisplayButton';


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
                              backgroundColor: colors.white,
                              flex: 1,
                              width: '100%',
                              height: 'auto',
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
                                        fontSize: 16,
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
                                                  // backgroundColor: colors.outline,
                                                  padding: 10,
                                                  borderRadius: 12,
                                                  borderWidth: 0.5,
                                                  borderColor: colors.outline,
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
                         <SingleProductPriceInfo />

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

                              }}>

                              <DisplayButton Title={'Subscribe'} onPressChanges={() => setVisible(true)} color={'primary'}/>

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

     productDescription: {
          // backgroundColor: 'blue',
          paddingHorizontal: 4,
          justifyContent: 'flex-start',
          width: '100%',
          height: 'auto',
          flexDirection: 'column',
     },
})