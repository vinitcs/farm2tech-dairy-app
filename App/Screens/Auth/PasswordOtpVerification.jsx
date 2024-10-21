import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import DisplayButton from '../../components/Button/DisplayButton';
import UserInput from '../../components/Credentials/UserInput';
import { useNavigation } from '@react-navigation/native';
import GoBackIcon from '../../components/GoBackIcon/GoBackIcon';


const PasswordOtpVerification = () => {
     const [text, setText] = React.useState("");
     const [password, setPassword] = React.useState("");
     const navigation = useNavigation();

     return (
          <SafeAreaView style={styles.container}>
               <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
               <View style={{
                    // backgroundColor:'pink',
                    position: 'absolute',
                    top: 30,
                    paddingHorizontal: 15,
               }}>
                    <GoBackIcon color={colors.lightText} />
               </View>
               <View style={{
                    // backgroundColor:'orange',
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    alignItems: 'center',
                    bottom: 10,
               }}>
                    <Text style={{
                         fontFamily: fonts.Semibold,
                         fontSize: 14,
                         color: colors.lightText
                    }}>Code has sent to</Text>
                    <Text style={{
                         fontFamily: fonts.Bold,
                         fontSize: 16,
                         color: colors.lightText
                    }}>username123@gmail.com</Text>
               </View>

               <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18,
                    marginTop: 10,
               }}>

                    <UserInput
                         placeholder={'Enter Code'}
                         leftIconName={'mail'}
                         useState={text}
                         onChangeState={text => setText(text)}
                    />
                    <View style={{
                         // backgroundColor:'orange',
                         width: '100%',
                         height: 'auto',
                         display: 'flex',
                         flexDirection: 'column',
                         paddingLeft: 4,
                         // alignItems: 'center',
                         bottom: 10,
                    }}>
                         <Text style={{
                              fontFamily: fonts.Semibold,
                              fontSize: 12,
                              letterSpacing:0.2,
                              color: colors.lightText
                         }}>
                              Did not receive the email? Check your spam filter, or
                              <Text style={{
                                   fontFamily: fonts.Bold,
                                   fontSize: 14,
                                   color: colors.primary
                              }}> try again </Text>
                         </Text>
                    </View>
                    <DisplayButton Title={'Verify'} color={'primary'} onPressChanges={() => navigation.navigate('NewPassword')} />

               </View>
          </SafeAreaView>
     )
}

export default PasswordOtpVerification

const styles = StyleSheet.create({
     container: {
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          flex: 1,
          width: '100%',
          height: 'auto',
          justifyContent: 'center',
          alignContent: 'center',
     },

     welcomeText: {
          color: 'black',
          fontSize: 12,
          textAlign: 'center',
          // fontWeight: 'bold',
     },
})