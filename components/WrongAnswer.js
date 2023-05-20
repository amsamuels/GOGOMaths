import React from 'react';

const WrongAnswer = (props) => {
  return (
    <div
      className='bg-red-100 border flex flex-col border-red-400 text-red-700 px-4 py-3 rounded relative'
      role='alert'
    >
      <strong className='font-bold'>Incorrect!</strong>
      <span className='e'>You got it wrong!</span>
      <span className=''>Heres how you could find the correct answer!</span>
      <span className='  my-2'>{props.children}</span>
    </div>
  );
};

export default WrongAnswer;
