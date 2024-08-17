import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import { colors } from './../../theme/colors/colors';
import { useNavigation } from '@react-navigation/native';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';
import { ScrollView } from 'react-native-gesture-handler';
import { fonts } from './../../theme/fonts/fonts';
import { productDisplayInfoData } from './../components/ProductDisplayInfo/ProductDisplayInfoContent';
import ProductInfo from '../components/ProductInfo/ProductInfo';

const ProductDisplayInfo = () => {
     const navigation = useNavigation();
     return (
          <View style={{ paddingHorizontal: 15, backgroundColor:colors.white, height:'100%'}}>
               <GoBackIcon color={colors.lightText}/>
               <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
               >
                    <ProductInfo />
                    
               </ScrollView>

          </View>
     )
}

export default ProductDisplayInfo

const styles = StyleSheet.create({})