import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Modal from "react-native-modal";
import React, { useContext, useState } from "react";
import { Icon } from "@rneui/themed";
import { fonts } from "../../theme/fonts/fonts";
import { colors } from "../../theme/colors/colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import DisplayButton from "../components/Button/DisplayButton";
import { useDispatch, useSelector } from "react-redux";
import SelectedProductCard from "../components/ProductCard/SelectedProductCard";
import { setSelectedPlanType } from "../../redux/slice/productSlice";

const ProductInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.userAuth.isLogin);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const [visible, setVisible] = useState(false);
  const selectPlanType = ["One Time Order", "Monthly"];

  const handlePlanTypePress = (selectedPlan) => {
    if (isLogin) {
      // console.log("Selected Plan:", selectedPlan);
      dispatch(setSelectedPlanType(selectedPlan));
      setVisible(false);
      navigation.navigate("SelectPlan", { selectedPlan });
    } else {
      setVisible(false);
      Alert.alert(
        "Login Required",
        "You need to be logged in to select a plan.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Login",
            onPress: () => navigation.navigate("Auth", { screen: "Login" }),
          },
        ]
      );
    }
  };

  function renderModal() {
    return (
      <Modal
        isVisible={visible}
        onBackButtonPress={() => {
          setVisible(false);
        }}
        onBackdropPress={() => {
          setVisible(false);
        }}
        animationIn={"slideInUp"}
        backdropColor="blur"
        animationInTiming={400}
        useNativeDriverForBackdrop={true}
        style={[styles.modalContainer, styles.shadowProp]}
      >
        <View style={styles.modalHeader}>
          <TouchableOpacity>
            <Icon
              name="close-outline"
              type="ionicon"
              size={34}
              color={colors.lightText}
              onPress={() => {
                setVisible(false);
              }}
            />
          </TouchableOpacity>
          <Text style={styles.modalHeaderTitle}>Select Plan Type</Text>
        </View>
        <View style={styles.modalActionSection}>
          {selectPlanType.map((name, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.planTypeBtn}
              onPress={() => {
                handlePlanTypePress(name);
              }}
              activeOpacity={0.7}
              pointerEvents="auto"
            >
              <Text style={styles.planTypeBtnValue}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    );
  }

  return (
    <View
      style={{
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        height: "100%",
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productInfoContainer}>
          <View style={styles.boxContainer}>
            <SelectedProductCard />
            <View style={styles.productDescription}>
              <Text style={styles.productDescriptionTitle}>Description</Text>
              <Text style={styles.productDescriptionPara}>
                {selectedProduct.description}
              </Text>
            </View>

            <View style={styles.productDelaimer}>
              <Text style={styles.productDelaimerTitle}>Declaimer</Text>
              <Text style={styles.productDeclaimerPara}>
              {selectedProduct.declaimer}
              </Text>
            </View>
            <DisplayButton
              Title={"Subscribe"}
              onPressChanges={() => setVisible(true)}
              color={"primary"}
            />
          </View>
          {renderModal()}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center", // Ensure content is centered
  },
  productInfoContainer: {
    //     backgroundColor:'purple',
    flex: 1,
    height: "auto",
  },
  boxContainer: {
    // backgroundColor: 'red',
    width: "100%",
    height: "auto",
    padding: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 20,
    marginTop: 10,
  },

  productDescription: {
    // backgroundColor: 'blue',
    paddingHorizontal: 4,
    justifyContent: "flex-start",
    width: "100%",
    height: "auto",
    flexDirection: "column",
  },
  productDescriptionTitle: {
    fontFamily: fonts.Bold,
    fontSize: 14,
    color: colors.lightText,
  },
  productDescriptionPara: {
    color: colors.lightText,
    fontFamily: fonts.Medium,
    fontSize: 12,
    textAlign: "justify",
    letterSpacing: 0.2,
  },

  productDelaimer: {
    // backgroundColor: 'blue',
    paddingHorizontal: 4,
    justifyContent: "flex-start",
    width: "100%",
    height: "auto",
    flexDirection: "column",
  },
  productDelaimerTitle: {
    fontFamily: fonts.Bold,
    fontSize: 14,
    color: colors.lightText,
  },
  productDeclaimerPara: {
    color: colors.lightText,
    fontFamily: fonts.Medium,
    fontSize: 12,
    textAlign: "justify",
    letterSpacing: 0.2,
  },

  modalContainer: {
    backgroundColor: colors.white,
    flex: 1,
    width: "100%",
    // height: 200,
    margin: 0,
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // borderWidth: 0.4,
    // borderColor: colors.outline,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
    zIndex: 2,
  },

  shadowProp: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -4 }, // Shadow falls below the modal
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 24, // For Android shadow
  },

  modalHeader: {
    // backgroundColor:'red',
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  modalHeaderTitle: {
    // backgroundColor:'blue',
    fontSize: 15,
    letterSpacing: 0.6,
    fontFamily: fonts.Semibold,
    marginVertical: 6,
    marginLeft: 6,
    color: colors.lightText,
  },

  modalActionSection: {
    gap: 14,
    marginVertical: 10,
  },

  planTypeBtn: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: colors.outline,
    width: "100%",
    height: "auto",
    // flexDirection: "row",
    // gap: 14,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },

  planTypeBtnValue: {
    // backgroundColor:'blue',
    color: colors.lightText,
    fontSize: 18,
    fontFamily: fonts.Medium,
  },
});
