import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    ip: null,
  },
  reducers: {
    setIp: (state, action) => {
      state.ip = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIp } = authSlice.actions;

export default authSlice.reducer;
