import { useEffect, useState } from 'react';
import { UsersList } from 'components/UsersList/UsersList';
import { getUsers } from 'utils/jsonApi';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return <UsersList users={users} />;
};
