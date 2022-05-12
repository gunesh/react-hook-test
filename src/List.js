import React, { useEffect, memo } from 'react';

function HomePage(props) {
  const { users } = props;
  return (
    <div className="col-lg-8 offset-lg-2">
      <button
        onClick={() => {
          props.handleReload();
        }}
      >
        {' '}
        Reload
      </button>

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
                  onClick={() => {
                    props.handleDeleteUser(user.id);
                  }}
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

export default memo(HomePage);
