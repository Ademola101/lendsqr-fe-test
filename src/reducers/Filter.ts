import { createSlice } from '@reduxjs/toolkit';

type selectOptionType = {
  value: string;
  label: string;
}
const initialState: selectOptionType | null = null;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    }
  }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;