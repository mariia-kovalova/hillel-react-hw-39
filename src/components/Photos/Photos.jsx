import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from 'redux/operations';
import {
  selectPhotos,
  selectErrorPhotos,
  selectIsLoadingPhotos,
} from 'redux/selectors';
import { useParams } from 'react-router-dom';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { Photo } from 'components/Photo/Photo';
import { Gallery } from 'components/GlobalStyles.styled';

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
    <Gallery className="gallery">
      {isLoading && <b>Loading photos...</b>}
      {error && <b>{error}</b>}
      {!isLoading &&
        photos.map(({ id, thumbnailUrl, title, url }) => (
          <Photo
            key={id}
            thumbnailUrl={thumbnailUrl}
            title={title}
            url={url}
            color={getRandomHexColor()}
          />
        ))}
    </Gallery>
  );
};
