import { configureStore } from "@reduxjs/toolkit";
import searchSlice from '../app/features/search'
export const store = configureStore({
    reducer:{
        slice: searchSlice
    }
})