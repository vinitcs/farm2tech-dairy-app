import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import GoBackIcon from "../components/GoBackIcon/GoBackIcon";
import { colors } from "./../../theme/colors/colors";
import { fonts } from "./../../theme/fonts/fonts";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: "100%",
        paddingHorizontal: 15,
      }}
    >
      {/* <GoBackIcon color={colors.lightText}/> */}
      <View
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <View style={[styles.shadowProp, styles.searchDiv]}>
          <TextInput
            placeholder="Try 'Milk'"
            selectionColor={colors.lightText}
            autoFocus={true}
            style={{
              color: colors.lightText,
              fontFamily: fonts.Medium,
              fontSize: 18,
            }}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: colors.outline,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: colors.background,
    elevation: 4,
  },
  searchDiv: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
