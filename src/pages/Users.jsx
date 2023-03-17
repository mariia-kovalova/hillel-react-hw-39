import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import {
  selectUsers,
  selectErrorUsers,
  selectIsLoadingUsers,
} from 'redux/selectors';
import { UsersList } from 'components/UsersList/UsersList';

export const Users = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoadingUsers);
  const error = useSelector(selectErrorUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <section className="container">
      {!isLoading && <UsersList users={items} />}
      {isLoading && <b>Loading users...</b>}
      {error && <b>{error}</b>}
    </section>
  );
};
