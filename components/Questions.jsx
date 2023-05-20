import React from 'react';

const Questions = (props) => {
  return (
    <h1 className='text-3xl font-sans font-bold text-gray-800 text-center'>
      {props.children}
    </h1>
  );
};

export default Questions;
