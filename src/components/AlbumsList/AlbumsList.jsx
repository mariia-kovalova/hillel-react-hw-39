import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import PropTypes from 'prop-types';
import { AlbumItem } from 'components/AlbumItem/AlbumItem';

export function AlbumsList({ albums }) {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  return (
    <>
      <h1>{username}'s Albums</h1>
      <ul>
        {albums.map(({ id, title }) => (
          <AlbumItem key={id} id={id} title={title} />
        ))}
      </ul>
    </>
  );
}

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object.isRequired),
};
