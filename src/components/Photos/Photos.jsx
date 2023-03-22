import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from 'redux/operations';
import {
  selectPhotos,
  selectErrorPhotos,
  selectIsLoadingPhotos,
} from 'redux/selectors';
import { useParams } from 'react-router-dom';
import { Photo } from 'components/Photo/Photo';
import { Gallery, GallleryItem } from './Photos.styled';

export const Photos = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const error = useSelector(selectErrorPhotos);
  const isLoading = useSelector(selectIsLoadingPhotos);

  useEffect(() => {
    dispatch(fetchPhotos(albumId));
  }, [albumId, dispatch]);

  return (
    <Gallery>
      {isLoading && <b>Loading photos...</b>}
      {error && <b>{error}</b>}
      {!isLoading &&
        photos.map(({ id, thumbnailUrl, title, url }) => (
          <GallleryItem key={id}>
            <Photo thumbnailUrl={thumbnailUrl} title={title} url={url} />
          </GallleryItem>
        ))}
    </Gallery>
  );
};
