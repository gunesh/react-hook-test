import React from 'react';

const WithMemoTest = (props) => {
  const { count } = props;
  console.log('MemoTest Render');
  return <div className="col-lg-8 offset-lg-2">{count}</div>;
};

const WithoutMemoTest = (props) => {
  const { count } = props;
  console.log('MemoTest Render');
  return <div className="col-lg-8 offset-lg-2">{count}</div>;
};

export  { WithMemoTest, WithoutMemoTest };
