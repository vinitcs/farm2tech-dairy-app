import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To,</Text>
      <Image source={require('./../../../assets/logo.png')} style={styles.logo} />
      <View style={{ padding: 20 }}>
        <TextInput style={styles.Input}
          label="Name"
          value={text}
          mode='outlined'
          multiline
          activeOutlineColor='#4B8E71'
          onChangeText={text => setText(text)}
        />
        <TextInput style={styles.Input}
          label="Password"
          value={text}
          mode='outlined'
          multiline
          activeOutlineColor='#4B8E71'
          onChangeText={text => setText(text)}
        />

      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    flex: 1,
    width: '100%',
    // height: 450,
    justifyContent: 'center',
    alignContent: 'center',
  },

  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: 30,
    marginTop: 20,
    alignItems:'center'

  },
  
  welcomeText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    // fontWeight: 'bold',
  },

  Input: {
    width: '100%',
    marginTop: 20,
  },
})