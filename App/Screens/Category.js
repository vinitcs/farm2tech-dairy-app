import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import { ScrollView } from 'react-native-gesture-handler';
import { fonts } from './../../theme/fonts/fonts';
import ProductDisplayPrice from '../components/ProductDisplayInfo/ProductDisplayPrice';

const Category = () => {
     return (
          <View>
               <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
               >
                    <View style={{ padding: 15 }}>
                         <ProductSlider />
                         <ProductDisplayPrice/>
                    </View>
               </ScrollView>
          </View>
     )
}

export default Category

const styles = StyleSheet.create({})