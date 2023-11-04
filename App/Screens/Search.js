import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{ padding: 20 }}>
       <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Search for item..."
              onChangeText={onChangeSearch}
              value={searchQuery}
              theme={{ colors: { primary: 'green' } }}
              iconColor="#6B9080"
            />
          </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 10,
    marginTop: 40,
  },
})