import PropTypes from 'prop-types';
// import { UserItem } from '../UserItem/UserItem';

export function AlbumsList({ albums }) {
  return (
    <div className="container">
      <ul>
        {albums.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object.isRequired),
};
