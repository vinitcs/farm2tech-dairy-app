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
    <SafeAreaView style={styles.loginContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.loginTitleSection}>
        <Text style={styles.loginTitle}>LOG IN</Text>
      </View>
      <View style={styles.welcomeContent}>
        <Text style={styles.welcomeHeaderText}>Welcome To,</Text>
        < Image style={styles.logo} source={require('./../../../assets/logo.png')} />
        <Text style={styles.subText}>Digitalization of dairy in rural</Text>
      </View>

      <View style={styles.inputSection}>
        <UserInput
          placeholder={'Enter email'}
          leftIcon={'leftIcon'}
          leftIconName={'mail'}
          useState={email}
          focus={true}
          onChangeState={text => setEmail(text)}
        />
        <UserInput
          placeholder={'Enter password'}
          leftIcon={'leftIcon'}
          rightIcon={'rightIcon'}
          leftIconName={'lock-closed'}
          // rightIconName={['eye','eye-off']}
          useState={password}
          onChangeState={text => setPassword(password)}
        />
        <DisplayButton Title={'Log in'} color={'primary'} />
      </View>

      <View style={styles.forgetPassSection}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgetPassText}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerSection}>
        <Text style={styles.footerText}>Already haven't an account?</Text>
        <TouchableOpacity>
          <Text style={styles.navigateText} onPress={() => navigation.navigate('Register')}>Sign up here</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    flex: 1,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
  },
  loginTitleSection: {
    // backgroundColor:'red',
    width: '100%',
    height: 'auto',
    bottom: 60,
  },
  loginTitle: {
    // backgroundColor:'pink',
    fontFamily: fonts.Semibold,
    fontSize: 20,
    color: colors.lightText,
    textAlign: 'center',

  },
  welcomeContent: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 10,

  },
  welcomeHeaderText: {
    color: colors.black,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.Semibold,
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: 30,
    alignItems: 'center'
  },
  subText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: fonts.Medium,
    letterSpacing: 0.2,
    bottom: 4,
  },
  welcomeText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    // fontWeight: 'bold',
  },

  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    marginTop: 10,
  },
  forgetPassSection: {
    // backgroundColor:'orange',
    width: '100%',
    height: 'auto',
    flexDirection: 'row-reverse',
    marginTop: 12,

  },
  forgetPassText: {
    color: colors.lightText,
    fontFamily: fonts.Medium,
    fontSize: 14,
    letterSpacing: 0.2
  },
  footerSection: {
    // backgroundColor: 'orange',
    width: '100%',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
    top:100
  },
  footerText: {
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  navigateText: {
    fontFamily: fonts.Bold,
    fontSize: 12,
    color: colors.primary,
  },
})