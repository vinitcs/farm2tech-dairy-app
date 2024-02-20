import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import GoBackIcon from '../components/GoBackIcon/GoBackIcon';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors/colors';
import { fonts } from '../../theme/fonts/fonts';
import ProfileAvatar from '../components/Avatar/ProfileAvatar';
import DisplayButton from '../components/Button/DisplayButton';
import ProfileDisplayCredentials from '../components/Credentials/ProfileDisplayCredentials';

export default function Profile() {
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >

        <View style={{
          backgroundColor: colors.primary,
          width: '100%',
          height: 200,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          // position: 'relative',
          paddingHorizontal: 15,


        }}>
          <GoBackIcon color={colors.white} />

        </View>

        <View style={{
          // backgroundColor: 'pink',
          width: '100%',
          height: 'auto',
          alignItems: 'justify',
          position: 'relative',
          top: -75,
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <ProfileAvatar size={130}/>

            <Text style={{
              fontSize: 20,
              color: colors.text,
              fontFamily: fonts.Semibold,
              marginTop: 15,
            }}>
              Profile Name
            </Text>
            <Text style={{
              fontSize: 16,
              color: colors.lightText,
              fontFamily: fonts.Medium,
              marginTop: 4,
            }}>
              Member since 20 Sep, 2023
            </Text>

            <TouchableOpacity onPress={()=>console.log('Edit')}>
              <View style={{
                marginTop: 20,
                backgroundColor: colors.primary,
                width: '100%',
                height: 'auto',
                alignItems: 'center',
                paddingVertical: 16,
                paddingHorizontal: 20,
                borderRadius: 16,

              }}>
                <Text style={{
                  fontSize: 16,
                  color: colors.white,
                  fontFamily: fonts.Medium,
                }}>Edit Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            // backgroundColor: 'yellow',
            paddingHorizontal: 15,
            marginTop: 10,

          }}>

            {/* Name  */}
            <View style={{
              marginTop: 10
            }}>
              <Text style={{
                fontSize: 16,
                color: colors.lightText,
                fontFamily: fonts.Semibold,
                marginTop: 4,
              }}>Name</Text>
              <View>
                <ProfileDisplayCredentials Title={'Profile Name'} color={'outline'}/>
              </View>
            </View>

            {/* Phone  */}
            <View style={{
              marginTop: 10
            }}>
              <Text style={{
                fontSize: 16,
                color: colors.lightText,
                fontFamily: fonts.Semibold,
                marginTop: 4,
              }}>Phone</Text>
              <View>
              <ProfileDisplayCredentials Title={'Profile Phone'} color={'outline'}/>
              </View>
            </View>

            {/* Email  */}
            <View style={{
              marginTop: 10
            }}>
              <Text style={{
                fontSize: 16,
                color: colors.lightText,
                fontFamily: fonts.Semibold,
                marginTop: 4,
              }}>Email</Text>
              <View>
              <ProfileDisplayCredentials Title={'Profile Email'} color={'outline'}/>
              </View>
            </View>
          </View>

          <View style={{
            paddingHorizontal: 15,
            marginTop: 25,
          }}>
           
            <DisplayButton Title={'Update'} 
            onPressChanges={() => console.log('Updated Successfully')}
             color={'primary'} />

          </View>
        </View>
      </ScrollView >
    </View >
  )
}

const styles = StyleSheet.create({});