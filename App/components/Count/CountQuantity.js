import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { React, useState } from 'react';
import { Icon } from '@rneui/themed';
import { colors } from '../../../theme/colors/colors';

const CountQuantity = () => {
     const [count, setCount] = useState(0);

     const increaseCount = () => {
          setCount(count + 1);
     };

     const decreaseCount = () => {
          if (count > 0) {
               setCount(count - 1);
          }
     };

     return (
          <View style={{
               // backgroundColor:'pink',
               flexDirection: 'row',
               gap: 10,
               marginTop: 12,
               justifyContent:'center',
          }}>
               <TouchableOpacity>
                    <Icon
                         name='remove-circle-outline'
                         type='ionicon'
                         size={35}
                         onPress={() => decreaseCount()}
                    />
               </TouchableOpacity>
               <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    style={{
                         backgroundColor:colors.outline,
                         fontSize: 22,
                         width:'40%',
                         borderRadius:12,
                         // borderWidth: 0.5,
                         color: colors.black,
                         textAlign:'center',
                    }}>
                    {count}
               </TextInput>
               <TouchableOpacity>
                    <Icon
                         name='add-circle-outline'
                         type='ionicon'
                         size={35}
                         onPress={() => increaseCount()}
                    />
               </TouchableOpacity>
          </View>
     )
}

export default CountQuantity

const styles = StyleSheet.create({})