import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../operations';

const initialState = {
  info: {},
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [fetchUser.pending](state) {
      state.isLoading = true;
    },
    [fetchUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.info = action.payload;
    },
    [fetchUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
