import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    email: null,
    isRestaurant: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.value = { ...action.payload };
    },
    clearUser: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { saveUser, clearUser } = userSlice.actions;

export const userData = (state) => state.user.value;

export default userSlice.reducer;
