import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/counter";
import userReducer from "../slice/authSlice.js";
import productReducer from "../slice/productSlice.js";

const store = configureStore({
  reducer: {
    counter: counter,
    userAuth: userReducer,
    product: productReducer,
  },
});

export default store;
