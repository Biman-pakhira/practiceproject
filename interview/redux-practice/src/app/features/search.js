import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"slice",
    initialState:{
        query:"",
        activeTab:'photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActive(state,action){
            state.activeTab = action.payload
        },
        setResult(state,action){
            state.results = action.payload
            state.loading = false
        },
        setLoading(state,action){
            state.loading = true
            state.error=null
        },
        setError(state,action){
            state.error = action.payload
            state.loading = false
        },
        clearResult(state,action){
            state.results=[]
        }
    }
})

export const {setQuery,setActive,setResult,setLoading,setError, clearResult} =searchSlice.actions
export default searchSlice.reducer;