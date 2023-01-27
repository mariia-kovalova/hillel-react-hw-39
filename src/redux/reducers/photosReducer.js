import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotos } from '../operations';

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchPhotos.pending](state) {
      state.isLoading = true;
    },
    [fetchPhotos.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPhotos.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default photosSlice.reducer;
