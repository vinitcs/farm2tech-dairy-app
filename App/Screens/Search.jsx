import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import Product from "../components/ProductCard/Product";

const Search = () => {
  console.log("Search Rerendered ----");

  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View
      style={styles.searchContainer}
    >
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Try 'Milk'"
          selectionColor={colors.lightText}
          autoFocus={true}
          style={styles.input}
          onChangeText={onChangeSearch}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {searchQuery.length > 0 && <Product hideTitle={true} searchQuery={searchQuery} />}
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: colors.white,
    height: "100%",
  },
  scrollViewContent: {
    paddingHorizontal: 15,
    flexGrow: 1,
  },
  searchBox: {
    width: "100%",
    height: 55,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 20,
    // backgroundColor: colors.background,
    borderBottomWidth: 0.4,
    borderBottomColor: colors.outline,
    // marginBottom: 10
  },
  input: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 18,
  },
});
