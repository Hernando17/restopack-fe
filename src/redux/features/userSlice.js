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
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
