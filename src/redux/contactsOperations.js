import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../services/api';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetch',
//   async (_, thunkAPI) => {
//     try {
//       const data = await api.getContacts();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/add',
//   async (data, rejectWithValue) => {
//     try {
//       const result = await api.addContact(data);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const removeContact = createAsyncThunk(
//   'contacts/remove',
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.removeContact(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk(
//   'contacts/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ id, name, number }, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', { id, name, number });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const editContact = createAsyncThunk(
//   'contacts/editContact',
//   async (data, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/contacts/${data.id}`, {
//         name: data.name,
//         number: data.number,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
