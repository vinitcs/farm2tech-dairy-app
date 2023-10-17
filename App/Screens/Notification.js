import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Notification = () => {
     const navigation = useNavigation();
     const _goBack = () => { navigation.goBack(); };
     const _handleSearch = () => console.log('Searching');
     const _handleMore = () => console.log('Shown more');

     return (

          <Appbar.Header>
               <Appbar.BackAction onPress={_goBack} />
               <Appbar.Content title="Notification" />
               <Appbar.Action icon="magnify" onPress={_handleSearch} />
               <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
          </Appbar.Header>


     );
}

export default Notification

const styles = StyleSheet.create({})