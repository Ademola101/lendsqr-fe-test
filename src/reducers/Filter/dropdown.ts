import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: false,
  reducers: {
    showDropDown(state) {
      return !state;
    }
  }
});

export const { showDropDown } = dropdownSlice.actions;
export default dropdownSlice.reducer;