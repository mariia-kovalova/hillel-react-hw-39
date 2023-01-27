import { combineReducers } from '@reduxjs/toolkit';
import users from './usersReducer';
import user from './userReducer';
import albums from './albumsReducer';
import photos from './photosReducer';

export default combineReducers({
  users,
  user,
  albums,
  photos,
});
