import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors/colors';
import { fonts } from '../../theme/fonts/fonts';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import AddressList from '../components/Address/AddressList';
import DisplayButton from '../components/Button/DisplayButton';

const Address = () => {
     const navigation = useNavigation();
     return (
          <View>
               <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
               >
                    <View style={{
                         paddingHorizontal: 15,
                         marginBottom: 20,

                    }}>
                         <GoBackIcon />

                         <Text style={{
                              fontSize: 14,
                              textAlign: 'center',
                              fontFamily: fonts.Bold,
                         }}>Address</Text>

                         <ScrollView style={{
                              // backgroundColor:colors.lightText,
                              marginTop: 15,
                              marginBottom: 15,
                              // borderRadius: 12,
                              // borderWidth: 1,
                              // borderColor: colors.outline,
                              width: '100%',
                              height: 590,
                         }}
                              nestedScrollEnabled={true}
                              showsVerticalScrollIndicator={true}
                         >
                              <AddressList />
                         </ScrollView>

                         <View style={{
                              flexDirection: 'column',
                              gap: 10,
                              justifyContent: 'space-between',
                         }}>

                              <DisplayButton Title={'Add New address'} onPressChanges={() => navigation.navigate('NewAddress')} color={'lightText'} />

                              <DisplayButton Title={'Next'} onPressChanges={() => navigation.navigate('BookedItem')} color={'primary'} />

                         </View>
                    </View>
               </ScrollView>
          </View>
     )
}

export default Address

const styles = StyleSheet.create({
     scrollViewContent: {
          flexGrow: 1,
     },
})