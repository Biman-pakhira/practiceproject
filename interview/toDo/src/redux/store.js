import { configureStore } from "@reduxjs/toolkit";
import newSlice from './features/featureSlice'
export const store = configureStore({
    reducer:{
        pathh: newSlice
    }
})