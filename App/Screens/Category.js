import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductSlider from '../components/ProductSlider';

const Category = () => {
     return (
          <View style={{ padding: 20 }}>
               <Text style={styles.dairyProducts}>Dairy Products</Text>
               <View style={styles.productSliderContainer}>
                    <ProductSlider />
               </View>
          </View>
     )
}

export default Category

const styles = StyleSheet.create({
     dairyProducts: {
          fontSize: 25,
          textAlign: 'center',
          marginTop: 40,
          fontWeight: 'bold',
     },

     productSliderContainer: {
          paddingTop: 20,
     },
})