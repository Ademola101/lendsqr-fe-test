import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './reducers/Filter/organization';
import usernameReducer from './reducers/Filter/username';
import emailReducer from './reducers/Filter/email';
import dropdownReducer from './reducers/Filter/dropdown';
import authReducer from './reducers/Auth';
const store  = configureStore({
  reducer: {
    organization: organizationReducer,
    username: usernameReducer,
    email: emailReducer,
    dropdown: dropdownReducer,
    auth: authReducer
  }
});
export type AppDispatch = typeof store.dispatch;


export type RootState = ReturnType<typeof store.getState>

export default store;