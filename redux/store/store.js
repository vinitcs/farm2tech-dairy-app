import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/authSlice";
import productReducer from "../slice/productSlice";
import ordersReducer from "../slice/orderSlice";

const store = configureStore({
  reducer: {
    userAuth: userReducer,
    product: productReducer,
    orders: ordersReducer,
  },
});

export default store;
