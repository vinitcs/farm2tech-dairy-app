
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './App/Navigation/Navigation';

const App = () => {
  console.log("main")
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({

});
