import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from 'redux/operations';
import {
  selectAlbums,
  selectErrorAlbums,
  selectIsLoadingAlbums,
} from 'redux/selectors';
import { AlbumsList } from 'components/AlbumsList/AlbumsList';

export const UserAlbums = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector(selectAlbums);
  const error = useSelector(selectErrorAlbums);
  const isLoading = useSelector(selectIsLoadingAlbums);
  useEffect(() => {
    dispatch(fetchAlbums(userId));
  }, [dispatch, userId]);

  return (
    <>
      <section>
        {!isLoading && <AlbumsList albums={albums} />}
        {isLoading && <b>Loading albums...</b>}
        {error && <b>{error}</b>}
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
