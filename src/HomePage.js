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
      {users.items && (
        <ul>
          {users.items.map((user, index) => (
            <li key={user.id}>
              {user.name + ' ' + user.name}
              {user.deleting ? (
                <em> - Deleting...</em>
              ) : user.deleteError ? (
                <span className="text-danger">
                  {' '}
                  - ERROR: {user.deleteError}
                </span>
              ) : (
                <span>
                  {' '}
                  -{' '}
                  <a
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-primary"
                  >
                    Delete
                  </a>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { HomePage };
