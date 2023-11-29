import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { fonts } from './../../../theme/fonts/fonts';
import { colors } from './../../../theme/colors/colors';
import { useNavigation } from "@react-navigation/core";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from "@rneui/themed";
// import Search from '../Screens/Search';

const DummySearch = () => {
     const navigation = useNavigation();
     return (
          <View>
               <TouchableOpacity
                    onPress={() => navigation.navigate('Search')}
                    style={{
                         width: "100%",
                         backgroundColor: colors.outline,
                         borderRadius: 12,
                         display: "flex",
                         paddingVertical: 10,
                         paddingLeft: 40,
                         alignItems: "center",
                         flexDirection: "row",
                    }}>
                    <Text
                         style={{
                              fontFamily: fonts.Medium,
                              fontSize: 17.5,
                              color: colors.lightText
                         }}>
                         Search for item...
                    </Text>
                    <View style={styles.searchIcon}>
                         <Icon
                              name="search-outline"
                              type="ionicon"
                              color={colors.lightText}
                              size={20}
                         />
                    </View>
               </TouchableOpacity>
          </View>
     )
}

export default DummySearch;

const styles = StyleSheet.create({
     searchIcon: {
          position: "absolute",
          top: "50%",
          left: "3%"
     }
})