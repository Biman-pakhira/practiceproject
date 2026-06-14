import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logChecker:false
}
const loginOutSlice = createSlice({
    name: "loginOut",
    initialState,
    reducers:{
        loginer(state, action){
            state.logChecker = !state.logChecker;
        }
    }
})

export const {loginer} = loginOutSlice.actions;
export default loginOutSlice.reducer;