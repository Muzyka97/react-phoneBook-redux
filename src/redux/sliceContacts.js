import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
import { fetchContacts, addContacts, deleteContacts } from './operation';

const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const sliceContacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload
        },
        [fetchContacts.rejected] : handleRejected,

        [addContacts.pending]: handlePending,
        [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
          },
        [addContacts.rejected]: handleRejected,
        [deleteContacts.pending]: handlePending,
        [deleteContacts.fulfilled](state, action){
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(item => item.id === action.payload )
            state.items.splice(index, 1)
        },
        [deleteContacts.rejected] : handleRejected,
      },
});

export const contactsReducer = sliceContacts.reducer;
export const {actions} = sliceContacts;