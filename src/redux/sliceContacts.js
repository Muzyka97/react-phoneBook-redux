import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const sliceContacts = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact:{
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(data){
                const newContact = {
                    ...data,
                    id: nanoid(),}
                return {
                    payload: newContact,
                }
            },
        },
        deleteContacts(state, action){
            return state.filter(item => item.id !== action.payload )
        }, 
    }
});

export const contactsReducer = sliceContacts.reducer;
export const {actions} = sliceContacts;