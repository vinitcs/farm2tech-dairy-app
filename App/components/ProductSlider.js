import { StyleSheet, Text, View, Image, ScrollView, Touchable } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductSlider = () => {
     return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

               <TouchableOpacity>
                    <View style={{
                         backgroundColor: '#ffff',
                         padding: 10,
                         margin: 4,
                         borderRadius: 20,
                         justifyContent: 'center',
                         alignItems: 'center',
                    }}>
                         <Image source={require('./../../assets/milk.png')} style={styles.logo} />
                         <Text style={styles.text}>Milk</Text>
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
                    }}>
                         <Image source={require('./../../assets/ghee.png')} style={styles.logo} />
                         <Text style={styles.text}>Ghee</Text>
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
                    }}>
                         <Image source={require('./../../assets/tofu.png')} style={styles.logo} />
                         <Text style={styles.text}>Tofu</Text>
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
                    }}>
                         <Image source={require('./../../assets/yogurt.png')} style={styles.logo} />
                         <Text style={styles.text}>Yogurt</Text>
                    </View>
               </TouchableOpacity>

          </ScrollView>
     )
}

export default ProductSlider

const styles = StyleSheet.create({
     logo: {
          resizeMode: 'contain',
          width: 120,
          height: 100,

     },
     text: {
          textAlign: 'center',
          paddingTop: 10
     }
})