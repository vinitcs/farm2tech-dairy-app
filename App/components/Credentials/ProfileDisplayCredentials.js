import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';

const ProfileDisplayCredentials = ({Title, color}) => {
     return (
          <View>
               <TouchableOpacity
                    style={{
                         width: "100%",
                         borderColor: colors[color],
                         borderWidth: 1,
                         borderRadius: 6,
                         display: "flex",
                         paddingVertical: 10,
                         paddingLeft: 12,
                         alignItems: "center",
                         flexDirection: "row",
                         marginTop: 4,
                    }}>
                    <Text
                         style={{
                              fontFamily: fonts.Medium,
                              fontSize: 17.5,
                              color: colors.text
                         }}>
                         {Title}
                    </Text>
               </TouchableOpacity>
          </View>
     )
}

export default ProfileDisplayCredentials

const styles = StyleSheet.create({})