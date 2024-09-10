import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, StatusBar  } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import DisplayButton from '../../components/Button/DisplayButton';
import UserInput from '../../components/Credentials/UserInput';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <KeyboardAvoidingView
        // style={{ flex: 1 }}
        behavior="padding"
      >
        <View style={{
          width: '100%',
          height: 'auto',
          alignItems: 'center',
          bottom: 60,
        }}>
          <Text style={{
            fontFamily: fonts.Semibold,
            fontSize: 20,
            color: colors.lightText
          }}>SIGN UP</Text>
        </View>

        <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          marginBottom: 10,
        }}>
          <Text style={{
            color: 'black',
            fontSize: 12,
            textAlign: 'center',
          }}>Welcome To,</Text>
          <Image style={{
            resizeMode: 'contain',
            width: '100%',
            height: 30,
            alignItems: 'center'
          }}
            source={require('./../../../assets/logo.png')}
          />
          <Text style={{
            fontSize: 12,
            textAlign: 'center',
            fontFamily: fonts.Medium,
            bottom: 4,
          }}>Digitalization of dairy in rural</Text>
        </View>

        <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          marginTop: 10,
        }}>
          <UserInput
            
            placeholder={'USER NAME'}
            leftIcon={'leftIcon'}
            leftIconName={'person-circle'}
            useState={name}
            onChangeState={text => setName(text)}
          />

          <UserInput
            placeholder={'EMAIL'}
            leftIcon={'leftIcon'}
            leftIconName={'mail'}
            useState={email}
            onChangeState={text => setEmail(text)}
          />

          <UserInput
            placeholder={'Phone'}
            leftIcon={'leftIcon'}
            leftIconName={'call'}
            useState={phone}
            onChangeState={text => setPhone(text)}
          />

          <UserInput
            placeholder={'PASSWORD'}
            leftIcon={'leftIcon'}
            rightIcon={'rightIcon'}
            leftIconName={'lock-closed'}
            // rightIconName={'eye'}
            useState={password}
            onChangeState={text => setPassword(text)}
          />

          <UserInput
            placeholder={'CONFIRM PASSWORD'}
            leftIcon={'leftIcon'}
            rightIcon={'rightIcon'}
            leftIconName={'lock-closed'}
            // rightIconName={'eye'}
            useState={password}
            onChangeState={text => setPassword(text)}
          />

          <DisplayButton Title={'Sign Up'} color={'primary'} />
        </View>
      </KeyboardAvoidingView>

      <View style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
      }}>
        <Text style={{
          fontFamily: fonts.Medium,
          fontSize: 12,
        }}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={{
            fontFamily: fonts.Bold,
            fontSize: 12,
            color: colors.primary,
          }} onPress={() => navigation.navigate('Login')}>Login here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.white,
    paddingHorizontal: 15,
    flex: 1,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
  },
})
