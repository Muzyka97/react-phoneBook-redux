import {createSlice} from '@reduxjs/toolkit';

const sliceFilter = createSlice({
    name: "filter",
    initialState: '',
    reducers:{
        setFilter(state, {payload}){
            return state = payload;
        }
    }
   
});

export const filterReducer = sliceFilter.reducer;
export const {setFilter} = sliceFilter.actions;
