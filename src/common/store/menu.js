export const SET_MENU = 'SET_MENU';
export const MENU_OPEN = 'MENU_OPEN';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  selectedItem: ['dashboard'],
  selectedId: null,
  drawerOpen: false
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    }
  }
});

export const menuState = (state) => state.menu.opened;
export const { openDrawer } = menuSlice.actions;
export default menuSlice.reducer;
