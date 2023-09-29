import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';


const Home=()=> {
  return (
    <View style={{padding:20}}>
      <Header/>
      <Text style={styles.welcomeText}>Welcome To,</Text>
      <Text style={styles.organizationName}>Farm2Tech</Text>
      <Text style={styles.description}>Digitalization in Dairy for Farmer's
            Development  in Rural Areas.</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  welcomeText:{
    color:'#6B9080',
    fontSize:15,
    marginTop:20,
    
    textAlign:'center',
    fontWeight: 'bold',
    
  },
  
  
  organizationName:{
    fontSize:50,
    fontWeight: 'bold',
    textAlign:'center',
    color:'#4B8E71',
  },

  description:{
    fontSize:9,
    textAlign:'center',
  }

  
})




// Colors
//   --main-color: #4B8E71;
//   --primary-color: #6B9080;
//   --button-background: #DA7650;
//   --primary-button-background: #fe7649;
//   --background-color: #CCE3DE;
//   --hover-color: #5c9ceb;