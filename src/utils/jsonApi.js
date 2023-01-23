import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = setUsers => {
  const URL = `${BASE_URL}/users`;
  axios
    .get(URL)
    .then(({ data }) => setUsers(data))
    .catch(err => console.log(err));
};

export const getAlbums = (id, setAlbums) => {
  const URL = `${BASE_URL}/albums`;
  const parameters = {
    params: {
      userId: id,
    },
  };
  axios
    .get(URL, parameters)
    .then(({ data }) => setAlbums(data))
    .catch(error => {
      console.log(error);
    });
};

export const getPhotos = (id, setPhotos) => {
  const URL = `${BASE_URL}/albums`;
  const parameters = {
    params: {
      albumId: id,
    },
  };
  axios
    .get(URL, parameters)
    .then(({ data }) => setPhotos(data))
    .catch(error => {
      console.log(error);
    });
};
