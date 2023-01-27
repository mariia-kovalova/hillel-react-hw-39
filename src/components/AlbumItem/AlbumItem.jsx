import { PhotosLi, PhotosLink } from 'GlobalStyles.styled';
import PropTypes from 'prop-types';
import { capitalize } from 'utils/capitalize';

export const AlbumItem = ({ id, title }) => {
  return (
    <PhotosLi>
      <p>{capitalize(title)}</p>
      <PhotosLink to={`${id}/photos`}>Photos</PhotosLink>
    </PhotosLi>
  );
};

AlbumItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
