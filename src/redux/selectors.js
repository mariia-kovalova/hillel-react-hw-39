export const selectUsers = state => state.users.items;
export const selectIsLoadingUsers = state => state.users.isLoading;
export const selectErrorUsers = state => state.users.error;

export const selectAlbums = state => state.albums.items;
export const selectIsLoadingAlbums = state => state.albums.isLoading;
export const selectErrorAlbums = state => state.albums.error;

export const selectPhotos = state => state.photos.items;
export const selectIsLoadingPhotos = state => state.photos.isLoading;
export const selectErrorPhotos = state => state.photos.error;

export const selectUser = state => state.user.info;
export const selectIsLoadingUser = state => state.user.isLoading;
export const selectErrorUser = state => state.user.error;
