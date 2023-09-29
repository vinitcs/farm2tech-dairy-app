import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from '../Navigation/TabNavigation'

const Main = ({ navigation }) => {
     // console.log("main", navigation);
     return (
          <View style={{ flex: 1, paddingTop: 20 }}>
               <TabNavigation />
          </View>
     )
}

export default Main

const styles = StyleSheet.create({})