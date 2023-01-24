import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function UserItem({ id, name, username, phone }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{phone}</td>
      <td>
        <Link to={`${id}/albums`}>Albums</Link>
      </td>
    </tr>
  );
}

UserItem.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  phone: PropTypes.any,
};
