import { StyleSheet, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed';
import {
     Avatar,
     Title,
     Caption,
     Paragraph,
     Drawer,
     Text,
     TouchableRipple,
     Switch,
     Button,
} from 'react-native-paper';

const CustomDrawer = ({ navigation, props }) => {
     // const navigation = useNavigation();

     return (
          <View style={{ flex: 1 }}>
               <DrawerContentScrollView {...props}>
                    <View Style={styles.DrawerContent}>
                         <View style={[styles.userInfoSection, { flexDirection: 'row', marginTop: 20 }]}>
                              <View style={{ marginLeft: 12, marginTop: 15 }}>
                                   <Avatar.Image source={require('./../../assets/about.jpg')} />
                              </View>
                              <View style={{ marginLeft: 8 }}>

                                   <View style={{ marginLeft: 9, marginTop: 15 }}>
                                        <Title style={styles.title}>Profile Name</Title>

                                   </View>
                                   <View style={{ marginLeft: 9, marginLeft: -4 }}>
                                        <Button icon="account" mode="text" textColor='#DA7650' onPress={() => navigation.navigate('Profile')} >My Account</Button>
                                   </View>
                              </View>
                              <View style={{ marginLeft: 26, marginTop: -5 }}>
                                   <TouchableOpacity>
                                        <Icon
                                             name='close-outline'
                                             type='ionicon'
                                             size={35}
                                             onPress={() => { navigation.closeDrawer(); }}
                                        />
                                   </TouchableOpacity>
                              </View>
                         </View>
                         <View>

                              <Drawer.Section>
                                   <Drawer.Item
                                        label="Home"
                                        onPress={() => navigation.navigate('Home')}
                                   />
                                   <Drawer.Item
                                        label="Category"
                                        onPress={() => navigation.navigate('Category')}
                                   />
                                   <Drawer.Item
                                        label="Search"
                                        onPress={() => navigation.navigate('Search')}
                                   />
                                   <Drawer.Item
                                        label="My Cart"
                                        onPress={() => navigation.navigate('Cart')}
                                   />
                                   <Drawer.Item
                                        label="Notification"
                                        onPress={() => navigation.navigate('Notification')}
                                   />
                                   <Drawer.Item
                                        label="Delivery"
                                        onPress={() => navigation.navigate('Delivery')}
                                   />
                              </Drawer.Section>
                         </View>

                    </View>
               </DrawerContentScrollView>
          </View>
     )
}

export default CustomDrawer

const styles = StyleSheet.create({

})



// Colors
//   --main-color: #4B8E71;
//   --primary-color: #6B9080;
//   --button-background: #DA7650;
//   --primary-button-background: #fe7649;
//   --background-color: #CCE3DE;
//   --hover-color: #5c9ceb;