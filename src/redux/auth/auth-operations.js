import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setBearer = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * Post /users/signup
 * body: {name, email, password}
 */

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      setBearer(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * Post /users/login
 * body: { email, password}
 */

export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', user);
    setBearer(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * Post /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET /users/me
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    try {
      setBearer(token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
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
