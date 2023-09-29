import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.header}>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity>
          <Ionicons name="reorder-three" size={35} color="black"
            onPress={() => { navigation.openDrawer(); }}
          />
        </TouchableOpacity>
      </View>

      <Image source={require('./../../assets/logo.png')} style={styles.logo} />

    </View>
  )
}

export default Header;


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },

  logo: {
    resizeMode: 'contain',
    width: 120,
    height: 50,
    marginLeft: 80,

  }

})