import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import GoBackIcon from "../components/GoBackIcon/GoBackIcon";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../theme/colors/colors";
import { fonts } from "../../theme/fonts/fonts";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import OrderStatus from "../components/OrderStatus/OrderStatus";

const Cart = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cartContainer}>
        <GoBackIcon color={colors.lightText} />
        <View>
          <Text style={styles.cartText}>Orders</Text>
        </View>

        <View style={styles.orderList}>
          <OrderStatus />
          <OrderStatus />
          <OrderStatus />
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  cartContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    height: "100%",
  },
  
  cartText: {
    color: colors.lightText,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fonts.Bold,
  },

  orderList: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
});
