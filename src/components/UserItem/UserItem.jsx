import PropTypes from 'prop-types';
import { Button } from 'GlobalStyles.styled';

export function UserItem({ id, name, username, phone }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{phone}</td>
      <td>
        <Button type="button">Albums</Button>
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
