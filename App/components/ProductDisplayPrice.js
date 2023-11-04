import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductDisplayPrice = () => {
  return (
    <View style={{ padding: 10, flex:1, flexDirection:'row', columnGap:20,}}>
      <TouchableOpacity>
        <View style={{
          backgroundColor: '#ffff',
          padding: 10,
          margin: 4,
         
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width:150,
        }}>
          <Image source={require('./../../assets/milk.png')} style={styles.logo} />
          <Text style={styles.text}>Farm2Tech Milk</Text>
          <Text style={styles.priceText}>{'\u20B9'} 80</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <View style={{
          backgroundColor: '#ffff',
          padding: 10,
          margin: 4,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width:150,
        }}>
          <Image source={require('./../../assets/ghee.png')} style={styles.logo} />
          <Text style={styles.text}>Farm2Tech Ghee</Text>
          <Text style={styles.priceText}>{'\u20B9'} 50</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default ProductDisplayPrice;

const styles = StyleSheet.create({
  logo: {
    // backgroundColor:'yellow',
    resizeMode: 'contain',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',


  },
  text: {
    // backgroundColor:'blue',
    width: 100,
    paddingTop: 10,
    textAlign:'left',
    fontSize:18
  },

  priceText:{
    width: 100,
    paddingTop: 10,
    textAlign:'left',
    fontSize:16,
    color:'#4B8E71'
  }
})