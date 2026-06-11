import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    tasks:[]
}
const taskSlice = createSlice({
 name:"biman",
 initialState,
 reducers:{
    addtask(state, action){
        state.tasks.push({
            id : nanoid(),
            task : action.payload 
        })
    },
    deletetask(state, action){
        state.tasks= state.tasks.filter((u)=>(u.id!==action.payload))
    }
 }
})
export const {
    addtask,
    deletetask
} = taskSlice.actions

export default taskSlice.reducer