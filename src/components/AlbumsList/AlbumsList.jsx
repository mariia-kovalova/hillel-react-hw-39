import PropTypes from 'prop-types';
import { AlbumItem } from 'components/AlbumItem/AlbumItem';

export function AlbumsList({ albums }) {
  return (
    <ul>
      {albums.map(({ id, title }) => (
        <AlbumItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
}

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object.isRequired),
};
