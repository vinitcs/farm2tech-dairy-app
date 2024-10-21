import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import DisplayButton from '../../components/Button/DisplayButton';
import UserInput from '../../components/Credentials/UserInput';
import { useNavigation } from '@react-navigation/native';
import GoBackIcon from '../../components/GoBackIcon/GoBackIcon';


const NewPassword = () => {
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
                    <GoBackIcon color={colors.lightText}/>
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
                         color: colors.lightText
                    }}>Create new password</Text>
                    <Text style={{
                         fontFamily: fonts.Medium,
                         fontSize: 12,
                         letterSpacing:0.2,
                         color: colors.lightText
                    }}>Your new password must be different from previous used passwords.</Text>
               </View>

               <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18,
               }}>

                    <UserInput
                         placeholder={'PASSWORD'}
                         leftIcon={'leftIcon'}
                         rightIcon={'rightIcon'}
                         leftIconName={'lock-closed'}
                         rightIconName={'eye'}
                         useState={password}
                         onChangeState={text => setPassword(text)}
                    />
                    <UserInput
                         placeholder={'CONFIRM PASSWORD'}
                         leftIcon={'leftIcon'}
                         rightIcon={'rightIcon'}
                         leftIconName={'lock-closed'}
                         rightIconName={'eye'}
                         useState={password}
                         onChangeState={text => setPassword(text)}
                    />

                    <DisplayButton Title={'Reset Password'} color={'primary'} onPressChanges={() => navigation.navigate('Login')} />
               </View>
          </SafeAreaView>
     )
}

export default NewPassword

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