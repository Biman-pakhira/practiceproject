import { configureStore } from "@reduxjs/toolkit";
import newSlice from './features/counterSlice'
export const store = configureStore({
    reducer:newSlice
})