import { configureStore } from '@reduxjs/toolkit';
import organizationReducer from './reducers/Filter/organization';
import usernameReducer from './reducers/Filter/username';

const store  = configureStore({
  reducer: {
    organization: organizationReducer,
    username: usernameReducer
  }
});
export type AppDispatch = typeof store.dispatch;


export type RootState = ReturnType<typeof store.getState>

export default store;