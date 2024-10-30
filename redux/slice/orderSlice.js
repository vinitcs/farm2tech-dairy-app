import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  selectedOrderProduct: {},
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.orderId !== action.payload
      );
    },
    setSelectedOrderProduct: (state, action) => {
      state.selectedOrderProduct = action.payload;
    },
    clearSelectedOrderProduct: (state) => {
      state.selectedOrderProduct = {};
    },
    updateOrderStartDate: (state, action) => {
      const { id, startDate, endDate } = action.payload;
      const order = state.orders.find((order) => order.orderId === id);
      if (order) {
        order.startDate = startDate;
        order.endDate = endDate;
        state.selectedOrderProduct = order; // Ensure this is updated
      }
    },
  },
});

export const {
  addOrder,
  deleteOrder,
  setSelectedOrderProduct,
  clearSelectedOrderProduct,
  updateOrderStartDate,
} = ordersSlice.actions;
export default ordersSlice.reducer;
