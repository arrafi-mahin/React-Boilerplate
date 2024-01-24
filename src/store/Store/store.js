import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducer/counterSlice';

export const store = configureStore({
  reducer: counterReducer,
});
