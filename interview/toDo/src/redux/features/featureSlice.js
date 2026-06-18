import { createSlice, nanoid } from "@reduxjs/toolkit";

const newSlice = createSlice({
    name:"toDo",
    initialState:{
        tasks:[{
            id: 1,
            taskName: "Medicine"
        },]
    },
    reducers:{
        addtask(state,action){
            state.tasks.push({
                id:nanoid(),
                taskName:action.payload
            })
        },
        deleted(state,action){
            state.tasks=state.tasks.filter((e)=>e.id!==action.payload)
        }
    }
})

export const {addtask, deleted}  = newSlice.actions;
export default newSlice.reducer;