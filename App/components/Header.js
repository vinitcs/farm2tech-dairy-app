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
        <View style={{
          position:'absolute',
          zIndex:1,
        }}>
          <TouchableOpacity>
            <Icon
              name='three-bars'
              type='octicon'
              size={24}
              color={colors.lightText}
              onPress={() => { navigation.openDrawer(); }}
            />
          </TouchableOpacity>
        </View>
        <View style={{
          // backgroundColor: colors.black,
          display:'flex',
          width: '100%',
          alignItems: 'center',
          zIndex:-1,

        }}>
          <Image source={require('./../../assets/logo.png')} style={styles.logo} />
        </View>
      </View>
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor: colors.lightText,
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
    // marginLeft: 82,

  },
});