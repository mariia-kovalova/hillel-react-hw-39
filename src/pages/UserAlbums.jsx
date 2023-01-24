import { AlbumsList } from 'components/AlbumsList/AlbumsList';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getAlbums } from 'utils/jsonApi';

export const UserAlbums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums(userId, setAlbums);
  }, [userId]);

  return (
    <>
      <section>
        <AlbumsList albums={albums} />
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
