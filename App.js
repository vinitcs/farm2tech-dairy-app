
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './App/Navigation/AppNavigation';

const App = () => {
  return <AppNavigation/>;
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:12,
    backgroundColor: '#fff',


  },
});
