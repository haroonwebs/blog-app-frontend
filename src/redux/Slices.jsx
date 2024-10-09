import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  token:null,
  role: null,
};


const getStoredData = localStorage.getItem("LocalData");

if (getStoredData) {
  const { user, token, role } = JSON.parse(getStoredData);
  initialState.user = user;
  initialState.token = token;
  initialState.role = role;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;

      
      localStorage.setItem(
        "LocalData",
        JSON.stringify({
          user: state.user,
          token: state.token,
          role: state.role,
        })
      );
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;

      
      localStorage.removeItem("LocalData");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
