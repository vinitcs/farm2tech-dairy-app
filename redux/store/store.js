import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/counter";

export default configureStore({
  reducer: {
    counter: counter
  }
});
