import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    refreshToken: null,
  },
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.value = { ...action.payload };
    },
    clearToken: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { saveToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
