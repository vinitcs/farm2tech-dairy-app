import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, Animated } from 'react-native';
import Header from '../components/Header';
import ProductSlider from '../components/ProductSlider';
import ProductDisplayPrice from '../components/ProductDisplayPrice';
import { Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import About from '../components/About';
import Speciality from '../components/Speciality';
import Contact from '../components/Contact';
// import ProductDisplayFlatList from '../components/ProductDisplayFlatList';


const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Header />

          <View style={styles.imageContainer}>
            <Image source={require('./../../assets/home.png')} style={styles.homeImg} />
          </View>

          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome To,</Text>
            <Text style={styles.organizationName}>Farm2Tech</Text>
            <Text style={styles.description}>Digitalization Of Dairy in Rural</Text>
          </View>

          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search for item..."
              onChangeText={onChangeSearch}
              value={searchQuery}
              theme={{ colors: { primary: 'green' } }}
              iconColor="#6B9080"
              // elevation={2}
            />
          </View>


          <Text style={styles.dairyDisplayContainerText}>Dairy Products</Text>

          <View style={styles.productSliderContainer}>
            <ProductSlider />
          </View>



          <View style={styles.specialityContainer}>
            <Speciality />
          </View>


          <Text style={styles.dairyDisplayContainerText}>Products</Text>

          <View style={styles.productDisplayContainer}>
            <ProductDisplayPrice />
          </View>

          <View style={styles.aboutContainer}>
            <About />
          </View>

          <View style={styles.contactContainer}>
            <Contact />
          </View>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Home;

const styles = StyleSheet.create({

  scrollViewContent: {
    flexGrow: 1,
  },

  imageContainer: {
    width: '100%',
    height: 200, // Adjust the height as needed
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeImg: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },

  welcomeContainer: {
    marginTop: 10,
  },

  welcomeText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    // fontWeight: 'bold',
  },

  organizationName: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B8E71',
  },

  description: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },

  searchContainer: {
    // backgroundColor:'blue',
    paddingTop: 10,

  },


  specialityContainer: {
    marginTop: 20,
  },

  dairyDisplayContainerText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    // fontWeight: '700',
  },

  productSliderContainer: {
    paddingTop: 20,
  },

  productDisplayContainer: {
    paddingTop: 20,
    // backgroundColor: 'brown',
  },

  // productDisplayContainerFlatList: {
  //   paddingTop: 20,
  //   backgroundColor: 'brown',
  //   // width: '100%',
  // },

  aboutContainer: {
    paddingTop: 20,
    // backgroundColor: 'red',
    // width: '100%',
    // height: '10%',

  },

  contactContainer: {
    paddingTop: 20,
    padding:10,
    // backgroundColor: 'red',
    // width: '100%',
    // height: '10%',

  },

})




// Colors
//   --main-color: #4B8E71;
//   --primary-color: #6B9080;
//   --button-background: #DA7650;
//   --primary-button-background: #fe7649;
//   --background-color: #CCE3DE;
//   --hover-color: #5c9ceb;