import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './List';
import Add from './add';
import { userActions } from './red/_actions';

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleReload(id) {
    dispatch(userActions.getAll());
  }

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  function handleAdd(data) {
    dispatch(userActions.save(data));
  }

  return (
    <div>
      <Add handleAdd={handleAdd} /> <br />
      <br />
      <HomePage
        handleReload={handleReload}
        handleDeleteUser={handleDeleteUser}
        users={users}
      />
    </div>
  );
}
