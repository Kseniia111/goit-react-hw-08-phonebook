// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as api from '../../services/authApi';

// export const signUp = createAsyncThunk(
//   'auth/signUp',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.getSignUp(data);
//       return result;
//     } catch ({ response }) {
//       const { status, statusText } = response;
//       const error = { status, statusText };
//       return rejectWithValue(error);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/logIn',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.getLogIn(data);
//       return result;
//     } catch ({ response }) {
//       const { status, statusText } = response;
//       const error = { status, statusText };
//       return rejectWithValue(error);
//     }
//   }
// );

// export const logOut = createAsyncThunk(
//   'auth/logOut',
//   async (_, { rejectWithValue }) => {
//     try {
//       const result = await api.getLogOut();
//       return result;
//     } catch ({ response }) {
//       const { status, statusText } = response;
//       const error = { status, statusText };
//       return rejectWithValue(error);
//     }
//   }
// );

// export const current = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const result = await api.getCurrent(auth.token);
//       return result;
//     } catch ({ response }) {
//       const { status, statusText } = response;
//       const error = { status, statusText };
//       return rejectWithValue(error);
//     }
//   }
// );
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error('That email already exist. Try another.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error('Invalid username or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
