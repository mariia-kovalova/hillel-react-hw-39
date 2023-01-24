import { PhotoCard } from 'GlobalStyles.styled';
import PropTypes from 'prop-types';

export const Photo = ({ color }) => {
  return <PhotoCard color={color}></PhotoCard>;
};

Photo.propTypes = {
  color: PropTypes.string.isRequired,
};
