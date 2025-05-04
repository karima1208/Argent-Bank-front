import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: null,
    userLoading: false,
    updateUserLoading: false,
    errorMessage: "",
  },
  reducers: {
    loginUserRequest: (state) => {
      state.userLoading = true;
      state.errorMessage = "";
    },
    loginUserSuccess: (state, action) => {
      state.userLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
    },
    loginUserFailed: (state, action) => {
      state.userLoading = false;
      state.errorMessage = action.payload.message;
    },
    updateUserRequest: (state) => {
      state.updateUserLoading = true;
      state.errorMessage = "";
    },
    updateUserSuccess: (state, action) => {
      state.updateUserLoading = false;
    },
    updateUserFailed: (state, action) => {
      state.updateUserLoading = false;
      state.errorMessage = action.payload.message;
    },
    logoutUser: (state) => {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});
export const {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailed,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailed,
  logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
