import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  selectedProduct: {},
  selectedPlanType: null,
  oneTimeOrderQuantity: 0,
  monthlyOrderQuantity: 0,
  monthlyStartDate: "",
  monthlyEndDate: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },

    setSelectedPlanType: (state, action) => {
      state.selectedPlanType = action.payload;
    },
    clearSelectedPlanType: (state) => {
      state.selectedPlanType = null;
    },

    setOneTimeOrderQuantity: (state, action) => {
      state.oneTimeOrderQuantity = action.payload;
    },
    clearOneTimeOrderQuantity: (state) => {
      state.oneTimeOrderQuantity = 0;
    },

    setMonthlyOrderQuantity: (state, action) => {
      state.monthlyOrderQuantity = action.payload;
    },
    clearMonthlyOrderQuantity: (state) => {
      state.monthlyOrderQuantity = 0;
    },

    setMonthlyAndEndDate: (state, action) => {
      const { startDate, endDate } = action.payload;
      state.monthlyStartDate = startDate;
      state.monthlyEndDate = endDate;
    },
    clearMonthlyAndEndDate: (state) => {
      state.monthlyStartDate = null;
      state.monthlyEndDate = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setSelectedProduct,
  clearSelectedProduct,
  setSelectedPlanType,
  clearSelectedPlanType,
  setOneTimeOrderQuantity,
  clearOneTimeOrderQuantity,
  setMonthlyOrderQuantity,
  clearMonthlyOrderQuantity,
  setMonthlyAndEndDate,
  clearMonthlyAndEndDate,
} = productSlice.actions;
export default productSlice.reducer;
