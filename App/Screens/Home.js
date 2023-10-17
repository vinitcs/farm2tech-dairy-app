import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);


  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView contentContainerStyle={{flex:1}} bounces={false}>
      <View style={{ padding: 20 }}>
        <Header />

        <View style={{ paddingTop: 40 }}>
          <Text style={styles.welcomeText}>Welcome To,</Text>
          <Text style={styles.organizationName}>Farm2Tech</Text>
          <Text style={styles.description}>Digitalization in Dairy for Farmer's
            Development  in Rural Areas.</Text>
        </View>



        <View style={{ paddingTop: 15 }}>
          <Searchbar
            placeholder="Search for item..."
            onChangeText={onChangeSearch}
            value={searchQuery}
            theme={{ colors: { primary: 'green' } }}
            iconColor="#6B9080"

          />
        </View>


        <Text style={styles.dairyProducts}>Dairy Products</Text>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Home;

const styles = StyleSheet.create({
  welcomeText: {
    color: 'black',
    fontSize: 15,
    marginTop: 20,

    textAlign: 'center',
    fontWeight: 'bold',

  },


  organizationName: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B8E71',
  },

  description: {
    fontSize: 9,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dairyProducts: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  }


})




// Colors
//   --main-color: #4B8E71;
//   --primary-color: #6B9080;
//   --button-background: #DA7650;
//   --primary-button-background: #fe7649;
//   --background-color: #CCE3DE;
//   --hover-color: #5c9ceb;