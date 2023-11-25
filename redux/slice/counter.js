import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0
  },
  reducers: {
    setCounterSlice: (state, action) => {
      state.counter = action.payload.counter;
    }
  }
});

export const { setCounterSlice } = couterSlice.actions;
export default couterSlice.reducer;
