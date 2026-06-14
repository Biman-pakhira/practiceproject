import { configureStore } from "@reduxjs/toolkit";
import loginOutSlice from './features/logInOut'
export const store = configureStore({
    reducer: loginOutSlice
})