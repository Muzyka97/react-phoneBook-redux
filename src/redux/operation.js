import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://63c94fec904f040a965b4271.mockapi.io'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",

    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");

        return response.data;
      } catch (e) {

        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({name, number}, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name, number});
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );