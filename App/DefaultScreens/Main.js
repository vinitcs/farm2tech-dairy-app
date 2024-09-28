import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import TabNavigation from '../Navigation/TabNavigation';
import {colors} from './../../theme/colors/colors';

const Main = () => {
     // console.log("main", navigation);
     return (
          <View style={{ flex: 1,  }}>
               <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.white}
                
               />
               <TabNavigation/>
          </View>
     )
}

export default Main

const styles = StyleSheet.create({})