import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../../theme/colors/colors';
import { fonts } from '../../../theme/fonts/fonts';
import { Icon } from '@rneui/themed';

const UserInput = ({ placeholder, leftIcon, rightIcon, leftIconName, rightIconName, useState, onChangeState }) => {
  const handleChange = (text) => {
    // Log the text value when it changes
    console.log("Text value changed:", { placeholder }, text);

    // Call the onChangeState function passed as prop
    onChangeState(text);
  };

  return (
    <View>
      <View style={{
        // backgroundColor:colors.outline,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 2,
        paddingHorizontal: 12,
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: colors.outline,
      }}>

        {leftIcon && (
          <Icon
            name={leftIconName}
            type='ionicon'
            size={25}
            color={colors.lightText}
          />
        )}

        <TextInput
          placeholder={placeholder}
          selectionColor={colors.lightText}
          autoFocus={true}
          value={useState}
          onChangeText={handleChange}
          style={{
            // backgroundColor:colors.outline,
            width: '85%',
            color: colors.lightText,
            fontFamily: fonts.Medium,
            fontSize: 16,
            height: 50,
            paddingHorizontal: 10,
          }}
        ></TextInput>

        <TouchableOpacity>
          {rightIcon && (
            <Icon
              name={rightIconName}
              type='ionicon'
              size={25}
              color={colors.lightText}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({})
