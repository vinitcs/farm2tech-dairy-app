import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigation from '../Navigation/DrawerNavigation'


const MainParent = () => {
  
  return (
    <View style={{flex:1,}}>
      <DrawerNavigation/>
    </View>
  )
}

export default MainParent

const styles = StyleSheet.create({})