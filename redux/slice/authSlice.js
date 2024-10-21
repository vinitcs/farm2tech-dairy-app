import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false, //default set true
  isLogin: true, //default set false
};

export const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const { setLoading, setLogin } = userSlice.actions;
export default userSlice.reducer;
