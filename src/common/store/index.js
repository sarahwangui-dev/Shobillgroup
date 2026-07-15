import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import menuReducer from './menu';
import { rootApi } from './rootApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    [rootApi.reducerPath]: rootApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware)
});
