import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Reducer/counterSlice";

export const store = configureStore({
    reducer: counterSlice,
})