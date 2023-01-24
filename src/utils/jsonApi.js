import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = setUsers => {
  const URL = `${BASE_URL}/users`;
  axios
    .get(URL)
    .then(({ data }) => setUsers(data))
    .catch(err => console.log(err));
};

export const getAlbums = (userId, setAlbums) => {
  const URL = `${BASE_URL}/albums`;
  const parameters = {
    params: {
      userId,
    },
  };
  axios
    .get(URL, parameters)
    .then(({ data }) => setAlbums(data))
    .catch(error => {
      console.log(error);
    });
};

export const getPhotos = (albumId, setPhotos) => {
  const URL = `${BASE_URL}/albums/${albumId}/photos`;

  axios
    .get(URL)
    .then(({ data }) => setPhotos(data))
    .catch(error => {
      console.log(error);
    });
};
