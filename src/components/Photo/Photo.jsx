import { useState } from 'react';
import PropTypes from 'prop-types';
import { PhotoCard } from 'GlobalStyles.styled';

export const Photo = ({ thumbnailUrl, title, url, color }) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleOnLoad = () => {
    setLoading(false);
  };

  const handleOnError = () => {
    setIsError(true);
    setLoading(false);
  };

  return (
    <a className="gallery__item" href={url}>
      {isError && !isLoading ? (
        <PhotoCard className="gallery__image" color={color} />
      ) : (
        <img
          onError={handleOnError}
          onLoad={handleOnLoad}
          className="gallery__image"
          src={thumbnailUrl}
          alt={title}
        />
      )}
    </a>
  );
};

Photo.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
