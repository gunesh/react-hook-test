import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './list';
import Add from './add';
import { WithMemoTest, WithoutMemoTest } from './Examples/memoexample';
import { userActions } from './red/_actions';

export default function App() {
  const [count, setCount] = useState(0);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleReload(id) {
    setCount(count + 1);
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
      <WithMemoTest count={count} /> <br />
      <WithoutMemoTest count={count} /> <br />
      <HomePage
        handleReload={handleReload}
        handleDeleteUser={handleDeleteUser}
        users={users}
      />
    </div>
  );
}
