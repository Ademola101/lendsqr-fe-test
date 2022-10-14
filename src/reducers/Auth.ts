import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  email: string | null;
  password: string | null;
}

const initialState: AuthState = {
  email: null,
  password: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state,{ payload: { email, password } }): AuthState {
      state.email = email;
      state.password = password;
      return state;
    },

    removeCredentials(state): AuthState {
      state.email = null;
      state.password = null;
      return state;
    }
  },

});

export const { setCredentials, removeCredentials } = authSlice.actions;
export default authSlice.reducer;