import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialStatus: 'pending', // | idle | null
  login: 'idle', // Successfull || Failed
  isLoggedIn: false,
  user: null,
  verified: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
      state.initialStatus = 'idle';
      state.login = 'Successfull';
    },
    setCurrentUser(state, { payload }) {
      state.user = payload;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.login = 'idle';
      state.initialStatus = 'pending';
    }
  }
});

export const { setLoggedIn, setCurrentUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
