import { configureStore } from "@reduxjs/toolkit";
import newSlice from './features/AddItem'
export const store = configureStore({
    reducer:{
        val: newSlice
    }
})