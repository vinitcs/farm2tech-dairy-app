import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import { ScrollView } from "react-native-gesture-handler";
import { fonts } from "./../../theme/fonts/fonts";
import ProductDisplayPrice from "../components/ProductDisplayInfo/ProductDisplayPrice";
import { Icon } from "@rneui/themed";
import { colors } from "./../../theme/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GoBackIcon from "../components/GoBackIcon/GoBackIcon";

const Category = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView
        // contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: 15,
            backgroundColor: colors.white,
          }}
        >
          <GoBackIcon color={colors.lightText}/>
          <ProductSlider />
          <ProductDisplayPrice />
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
