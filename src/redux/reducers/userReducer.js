import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {
      id: 1,
      name: '',
      username: '',
      email: '',
    },
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUser.pending](state) {
      state.isLoading = true;
    },
    [fetchUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.info.id = action.payload.id;
      state.info.name = action.payload.name;
      state.info.username = action.payload.username;
      state.info.email = action.payload.email;
    },
    [fetchUser.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
