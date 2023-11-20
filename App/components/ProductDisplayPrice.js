import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductDisplayPrice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('./../../assets/milk.png')} style={styles.logo} />
            <Text style={styles.text}>Farm2Tech Milk</Text>
            <Text style={styles.priceText}>{'\u20B9'} 80</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('./../../assets/ghee.png')} style={styles.logo} />
            <Text style={styles.text}>Farm2Tech Ghee</Text>
            <Text style={styles.priceText}>{'\u20B9'} 50</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('./../../assets/tofu.png')} style={styles.logo} />
            <Text style={styles.text}>Farm2Tech Tofu</Text>
            <Text style={styles.priceText}>{'\u20B9'} 120</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('./../../assets/yogurt.png')} style={styles.logo} />
            <Text style={styles.text}>Farm2Tech Yogurt</Text>
            <Text style={styles.priceText}>{'\u20B9'} 100</Text>
          </View>
        </TouchableOpacity>
      </View >
    </View>
  )
}

export default ProductDisplayPrice;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  boxContainer: {
    // backgroundColor: 'red',
    width: '100%',
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  box:{
    backgroundColor: '#F0F8FF',
    padding: 10,
    margin: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },

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
    textAlign: 'left',
    fontSize: 18
  },

  priceText: {
    width: 100,
    paddingTop: 10,
    textAlign: 'left',
    fontSize: 16,
    color: '#4B8E71'
  }
})