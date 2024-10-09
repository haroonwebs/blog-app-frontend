import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./Slices"; 

const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
});

export default store;




















// import { createSlice, configureStore } from "@reduxjs/toolkit";


// const initialLoginState = Boolean(localStorage.getItem("token"));

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLogin: initialLoginState
//   },
//   reducers: {
//     Login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

// export const authActions = authSlice.actions;

// export const store = configureStore({
//   reducer: authSlice.reducer,
// });




// src/redux/store.js


