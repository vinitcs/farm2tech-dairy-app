// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


// const data = [
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },
//      { name: 'vinit' },

// ];

// const ProductDisplayFlatList = () => {
//      return (
//           <View style={{ flex: 1, marginTop: 20 }}>
//                <FlatList
//                     data={data}
//                     numColumns={2}
//                     columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
//                     contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
//                     keyExtractor={(item, idx) => item.name + idx}
//                     showsVerticalScrollIndicator={false}
//                     renderItem={({ item }) => {
//                          return (

//                               <TouchableOpacity
//                                    style={{
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         flexDirection: 'row',
//                                         backgroundColor: '#6b7280',
//                                         flex: 1,
//                                         height: 30,
//                                         width: '100%',
//                                         borderRadius: 20,
//                                    }}
//                               >
//                                    <Text style={{ color: 'white' }}>{item.name}</Text>

//                               </TouchableOpacity>

//                          )
//                     }}
//                />
//           </View>
//      )
// }

// export default ProductDisplayFlatList

// const styles = StyleSheet.create({})