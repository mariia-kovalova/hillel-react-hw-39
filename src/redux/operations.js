import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchAll',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/users/${userId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchAlbums = createAsyncThunk(
  'user-albums/fetchAll',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/users/${userId}/albums`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchPhotos = createAsyncThunk(
  'user-album-photos/fetchAll',
  async (albumId, thunkAPI) => {
    try {
      const response = await axios.get(`/albums/${albumId}/photos`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
