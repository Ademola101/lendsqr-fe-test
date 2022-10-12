import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/Filter';

const store  = configureStore({
  reducer: {
    filter: filterReducer
  }
});
export type AppDispatch = typeof store.dispatch;


export type RootState = ReturnType<typeof store.getState>

export default store;