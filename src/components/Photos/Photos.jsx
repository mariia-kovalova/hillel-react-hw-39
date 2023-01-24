import { Photo } from 'components/Photo/Photo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPhotos } from 'utils/jsonApi';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { Gallery } from 'GlobalStyles.styled';

export const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(albumId, setPhotos);
  }, [albumId]);

  return (
    <Gallery>
      {photos.map(({ id }) => (
        <Photo key={id} color={getRandomHexColor()} />
      ))}
    </Gallery>
  );
};
