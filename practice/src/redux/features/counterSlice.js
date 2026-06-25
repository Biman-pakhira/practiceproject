import { createSlice, nanoid } from "@reduxjs/toolkit";

const newSlice = createSlice({
    name:"counter",
    initialState:{
        value:{
            task:[],
            chker:false
        }
    },
    reducers:{
        increase(state, action){
            state.value.task.push({
                id:nanoid(),
                list:action.payload
            }),
            state.value.chker=true

        },
        deletee(state,action){
            state.value.task=state.value.task.filter(e=>e.id!=action.payload);
            if(state.value.task.length==0){
                state.value.chker=false;
            }
        }
    }
})

export const {increase,deletee } = newSlice.actions;
export default newSlice.reducer;