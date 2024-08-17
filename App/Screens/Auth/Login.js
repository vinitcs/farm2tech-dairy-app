import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import DisplayButton from '../../components/Button/DisplayButton';
import UserInput from '../../components/Credentials/UserInput';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={{
        // backgroundColor:'orange',
        width: '100%',
        height: 'auto',
        // position: 'absolute',
        alignItems: 'center',
        bottom: 60,
      }}>
        <Text style={{
          fontFamily: fonts.Semibold,
          fontSize: 20,
          color: colors.lightText
        }}>LOG IN</Text>
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
          // fontWeight: 'bold',
        }}>Welcome To,</Text>

        < Image style={{
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
          placeholder={'EMAIL'}
          leftIcon={'leftIcon'}
          leftIconName={'mail'}
          useState={email}
          focus={true}
          onChangeState={text => setEmail(text)}
        />

        <UserInput
          placeholder={'PASSWORD'}
          leftIcon={'leftIcon'}
          rightIcon={'rightIcon'}
          leftIconName={'lock-closed'}
          // rightIconName={['eye','eye-off']}
          useState={password}
          onChangeState={text => setPassword(password)}
        />

        <DisplayButton Title={'Log in'} color={'primary'} />

      </View>

      <View style={{
        // backgroundColor:'orange',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row-reverse',
        marginTop: 12,
        paddingLeft: 6,

      }}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{
            color:colors.lightText,
            fontFamily: fonts.Medium,
            fontSize: 14,
            letterSpacing:0.2
          }}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{
        // backgroundColor:'orange',
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
        }}>Already haven't an account?</Text>
        <TouchableOpacity>
          <Text style={{
            fontFamily: fonts.Bold,
            fontSize: 12,
            color: colors.primary,
          }} onPress={() => navigation.navigate('Register')}>Sign up here</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Login;

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