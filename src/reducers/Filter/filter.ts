import { createSlice } from '@reduxjs/toolkit';


type Organization = {
  value: string;
  label: string;
}
interface initialState {
  email: string;
  username: string;
  organization: Organization;
}


const initialState: initialState = {
  email: '',
  organization: {
    value: '',
    label: ''
  },
  username: ''
};

const filterSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setOrganization(state, action) {
      state.organization.label = action.payload.label;
      state.organization.value = action.payload.value;
    },

    setUsername(state, action) {
      state.username = action.payload;
    }

  } });

export const { setEmail, setOrganization, setUsername } = filterSlice.actions;
export default filterSlice.reducer;