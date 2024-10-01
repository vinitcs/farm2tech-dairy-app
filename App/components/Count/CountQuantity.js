import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { React, useState } from "react";
import { Icon } from "@rneui/themed";
import { colors } from "../../../theme/colors/colors";
import { fonts } from "../../../theme/fonts/fonts";

const CountQuantity = ({title}) => {
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
    <View>
      <Text style={styles.countQuantityTitle}>{title}</Text>
      <View style={styles.countQuantityActionSection}>
        <TouchableOpacity>
          <Icon
            color={colors.lightText}
            name="remove-circle-outline"
            type="ionicon"
            size={34}
            onPress={() => decreaseCount()}
          />
        </TouchableOpacity>
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={styles.displayInput}
        >
          {count}
        </TextInput>
        <TouchableOpacity>
          <Icon
            color={colors.lightText}
            name="add-circle-outline"
            type="ionicon"
            size={34}
            onPress={() => increaseCount()}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountQuantity;

const styles = StyleSheet.create({
  countQuantityTitle: {
    color: colors.lightText,
    textAlign: "center",
    fontSize: 12,
    fontFamily: fonts.Semibold,
    letterSpacing: 0.8,
  },

  countQuantityActionSection: {
    // backgroundColor:'pink',
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
    justifyContent: "center",
  },
  displayInput: {
    backgroundColor: colors.background,
    fontSize: 22,
    width: "40%",
    borderRadius: 12,
    // borderWidth: 0.5,
    color: colors.lightText,
    textAlign: "center",
  },
});
