import { createSlice } from '@reduxjs/toolkit';
import { fetchAlbums } from '../operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  extraReducers: {
    [fetchAlbums.pending](state) {
      state.isLoading = true;
    },
    [fetchAlbums.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAlbums.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default albumsSlice.reducer;
