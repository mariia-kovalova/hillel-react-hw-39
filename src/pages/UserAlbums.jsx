import { AlbumsList } from 'components/AlbumsList/AlbumsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbums } from 'utils/jsonApi';

export const UserAlbums = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums(id, setAlbums);
  }, [id]);

  console.log(albums);

  return <AlbumsList albums={albums} />;
};
