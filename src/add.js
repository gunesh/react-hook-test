import React, { useEffect, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Add(props) {
  const data = {
    id: uuidv4(),
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  return (
    <div className="col-lg-8 offset-lg-2">
      <button
        onClick={() => {
          props.handleAdd(data);
        }}
      >
        {' '}
        Add
      </button>
    </div>
  );
}

export default memo(Add);
