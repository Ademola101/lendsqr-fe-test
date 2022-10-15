import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './reducers/Filter/dropdown';
import authReducer from './reducers/Auth';
import filterReducer from './reducers/Filter/filter';
const store  = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    auth: authReducer,
    filter: filterReducer
  }
});
export type AppDispatch = typeof store.dispatch;


export type RootState = ReturnType<typeof store.getState>

export default store;