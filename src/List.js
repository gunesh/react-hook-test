import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from './red/_actions';

function HomePage() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      {!users.items && 'Loading....'}

      <table border="1" width="100%">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {!users.items && (
          <tr>
            <td colSpan="3">Loading........</td>
          </tr>
        )}
        {users.items &&
          users.items.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {' '}
                <a
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-primary"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export { HomePage };
