import { StyleSheet, Text, ScrollView, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/colors/colors';

const Notification = () => {
     const navigation = useNavigation();
     return (
          <ScrollView
               contentContainerStyle={styles.scrollViewContent}
               bounces={false}
               showsVerticalScrollIndicator={false}
          >
               <View style={styles.notificationContainer}>
                    <Text>Notification</Text>
               </View>
          </ScrollView>

     );
}

export default Notification

const styles = StyleSheet.create({
     scrollViewContent: {
          flexGrow: 1,
     },

     notificationContainer: {
          flexGrow: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          paddingVertical: 15,
          height: "100%",
          gap: 15,
     },
})