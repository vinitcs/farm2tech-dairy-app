import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, StatusBar, ScrollView, Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import DisplayButton from '../../components/Button/DisplayButton';
import UserInput from '../../components/Credentials/UserInput';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })



  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Password does not match");
      return;
    }
    navigation.navigate("Login")
    console.log("Registered Data: ", formData);

  }


  return (
    <SafeAreaView style={styles.registerContainer}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>

          <View style={styles.mainSection}>

            <View style={styles.signupTitleSection}>
              <Text style={styles.signupTitle}>SIGN UP</Text>
            </View>

            <View style={styles.welcomeContent}>
              <Text style={styles.welcomeHeaderText}>Welcome To,</Text>
              <Image style={styles.logo} source={require('./../../../assets/logo.png')} />
              <Text style={styles.subText}>Digitalization of dairy in rural</Text>
            </View>

            <UserInput
              placeholder={'Enter name'}
              leftIcon={'leftIcon'}
              leftIconName={'person-circle'}
              value={formData.name}
              onChangeState={text => handleInputChange("name", text)}
            />

            <UserInput
              placeholder={'Enter email'}
              leftIcon={'leftIcon'}
              leftIconName={'mail'}
              value={formData.email}
              onChangeState={text => handleInputChange("email", text)}
            />

            <UserInput
              placeholder={'Enter phone'}
              leftIcon={'leftIcon'}
              leftIconName={'call'}
              // useState={phone}
              value={formData.phone}
              onChangeState={text => handleInputChange("phone", text)}
            />

            <UserInput
              placeholder={'Enter password'}
              leftIcon={'leftIcon'}
              rightIcon={'rightIcon'}
              leftIconName={'lock-closed'}
              // rightIconName={'eye'}
              // useState={password}
              value={formData.password}
              onChangeState={text => handleInputChange("password", text)}

            />

            <UserInput
              placeholder={'Enter confirm password'}
              leftIcon={'leftIcon'}
              rightIcon={'rightIcon'}
              leftIconName={'lock-closed'}
              // rightIconName={'eye'}
              // useState={password}
              value={formData.confirmPassword}
              onChangeState={text => handleInputChange("confirmPassword", text)}
            />

            <DisplayButton Title={'Sign Up'} color={'primary'} onPressChanges={handleSubmit} />
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.navigateText} onPress={() => navigation.navigate('Login')}>Login here</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    flex: 1,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  mainSection: {
    gap: 18,
  },
  signupTitleSection: {
    // backgroundColor:'orange',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    bottom: 40,
  },
  signupTitle: {
    fontFamily: fonts.Semibold,
    fontSize: 20,
    color: colors.lightText
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
    bottom: 4,
  },

  footerSection: {
    // backgroundColor: 'orange',
    width: '100%',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
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
