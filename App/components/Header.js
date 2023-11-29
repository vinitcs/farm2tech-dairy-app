import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { colors } from './../../theme/colors/colors';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity>
          <Icon
            name='menu-outline'
            type='ionicon'
            size={35}
            onPress={() => { navigation.openDrawer(); }}
          />
        </TouchableOpacity>
          <Image source={require('./../../assets/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor:colors.lightText,
    // marginTop: 2,
    width: '100%',
    height: 'auto',

  },

  headerContent: {
    // backgroundColor:'red',
    flexDirection: 'row',
    alignItems: "center",
  },

  logo: {
    // backgroundColor: 'yellow',
    resizeMode: 'contain',
    width: 120,
    height: 50,
    marginLeft: 82,

  },
});