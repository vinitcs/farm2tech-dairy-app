import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import DisplayButton from '../../components/Button/DisplayButton';
import UserInput from '../../components/Credentials/UserInput';
import { useNavigation } from '@react-navigation/native';
import GoBackIcon from '../../components/GoBackIcon/GoBackIcon';

const ForgotPassword = () => {
     const [text, setText] = React.useState("");
     const [password, setPassword] = React.useState("");
     const navigation = useNavigation();

     return (
          <SafeAreaView style={styles.container}>
               <StatusBar backgroundColor={colors.lightText} barStyle="light-content" />
               <View style={{
                    // backgroundColor:'pink',
                    position:'absolute',
                    top:30,
                    paddingHorizontal:15,
               }}>
                    <GoBackIcon />
               </View>
               <View style={{
                    // backgroundColor:'orange',
                    width: '100%',
                    height: 'auto',
                    display:'flex',
                    flexDirection:'column',
                    gap:4,
                    // alignItems: 'center',
                    bottom: 25,
               }}>
                    <Text style={{
                         fontFamily: fonts.Bold,
                         fontSize: 24,
                         color: colors.black
                    }}>Reset Password</Text>
                    <Text style={{
                         fontFamily: fonts.Semibold,
                         fontSize: 12,
                         paddingLeft:2,
                         color: colors.lightText
                    }}>Enter the email associated with your account and we'll send an email with verification code to reset your password.</Text>
               </View>

               <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18,
                    marginTop: 10,
               }}>

                    <UserInput
                         placeholder={'Email'}
                         leftIcon={'leftIcon'}
                         leftIconName={'mail'}
                         useState={text}
                         onChangeState={text => setText(text)}
                    />

                    <DisplayButton Title={'Get Code'} color={'lightText'} onPressChanges={()=>navigation.navigate('PasswordOtpVerification')}/>

               </View>
          </SafeAreaView>
     )
}

export default ForgotPassword

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'yellow',
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

