import { createSlice } from "@reduxjs/toolkit";

const newfeature = createSlice({
    name:"cart",
    initialState:{
        user:[],
        isLogin:false
    },
    reducers:{
        logging(state, action){
            state.user.push({
                name:action.payload
            });
            state.isLogin=true;
        },
        logout(state){
            state.user.pop();
            state.isLogin=false;
        }
    }
})
export const {logging, logout } = newfeature.actions
export default newfeature.reducer;