import PropTypes from 'prop-types';
import { UserItem } from '../UserItem/UserItem';

export function UsersList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">User name</th>
          <th scope="col">Phone Number</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, name, username, phone }) => (
          <UserItem
            key={id}
            id={id}
            name={name}
            username={username}
            phone={phone}
          />
        ))}
      </tbody>
    </table>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired),
};
