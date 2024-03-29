import { useState } from 'react';
import PropTypes from 'prop-types';
import { OnPhotoLoading, PhotoCard } from './Photo.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

const FALLBACK_SRC =
  'https://ik.imagekit.io/blsadqwgu/fall_back.png?updatedAt=1679490493731';

export const Photo = ({ thumbnailUrl, title, url }) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleOnLoad = () => {
    setLoading(false);
  };

  const handleOnError = () => {
    setIsError(true);
    setLoading(false);
  };

  const handleClick = e => {
    e.preventDefault();
    setImageUrl(e.currentTarget.href);
  };

  return (
    <>
      {isLoading && <OnPhotoLoading>Loading...</OnPhotoLoading>}
      {isError && !isLoading ? (
        <a href={FALLBACK_SRC} onClick={handleClick}>
          <PhotoCard src={FALLBACK_SRC} />
        </a>
      ) : (
        <a href={url} onClick={handleClick}>
          <img
            onError={handleOnError}
            onLoad={handleOnLoad}
            src={thumbnailUrl}
            alt={title}
            width="150"
            height="150"
            loading="lazy"
          />
        </a>
      )}
      {imageUrl && (
        <ModalWindow onCloseModal={() => setImageUrl(null)}>
          <img src={imageUrl} alt={title} width="600" height="600" />
        </ModalWindow>
      )}
    </>
  );
};

Photo.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
