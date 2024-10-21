import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import { Icon } from '@rneui/themed';

const UserInput = ({ focus, placeholder, leftIcon, leftIconName, value, onChangeState }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (text) => {
    setInputValue(text);
  };

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 4,
        paddingHorizontal: 12,
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: colors.outline,
      }}>

        {leftIcon && (
          <Icon
            name={leftIconName}
            type='ionicon'
            size={20}
            color={colors.lightText}
          />
        )}

        <TextInput
          placeholder={placeholder}
          selectionColor={colors.lightText}
          autoFocus={focus}
          value={value}
          onChangeText={onChangeState}
          secureTextEntry={!passwordVisible && (placeholder === 'Enter password' || placeholder === 'Enter confirm password')} // Toggle secureTextEntry based on passwordVisible state and placeholder
          style={{
            // backgroundColor:colors.background,
            flex: 1,
            color: colors.lightText,
            fontFamily: fonts.Medium,
            fontSize: 16,
            height: 50,
            paddingHorizontal: 10,
          }}
        />

        {(placeholder === 'Enter password' || placeholder === 'Enter confirm password') && ( // Render eye icon only for password input
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={passwordVisible ? 'eye' : 'eye-off'}
              type='ionicon'
              size={20}
              color={colors.lightText}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default UserInput;

const styles = StyleSheet.create({});
