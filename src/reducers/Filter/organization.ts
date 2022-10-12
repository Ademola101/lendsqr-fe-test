import { createSlice } from '@reduxjs/toolkit';


type selectOptionType = {
  value: string
  label: string
}
const initialState: selectOptionType = {
  value: '',
  label: ''
};

const organizationSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    }
  }
});

export const { setFilter } = organizationSlice.actions;
export default organizationSlice.reducer;