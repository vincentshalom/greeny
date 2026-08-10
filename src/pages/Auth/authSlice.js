import { createSlice } from "@reduxjs/toolkit";
import { AUTH_STORAGE_KEY } from "../../utils/constants";

function loadInitialState() {
  try {
    const stored = sessionStorage.getItem(AUTH_STORAGE_KEY);
    return stored ? JSON.parse(stored) : { user: null, token: null };
  } catch {
    return { user: null, token: null };
  }
}

const initialState = loadInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut(state) {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const getCurrentUser = (state) => state.auth.user;
export const getAuthToken = (state) => state.auth.token;
export const getIsAuthenticated = (state) => Boolean(state.auth.token);

export default authSlice.reducer;
