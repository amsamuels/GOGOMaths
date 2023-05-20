import React from 'react';

const CorrectAnswer = () => {
  return (
    <div
      className='bg-green-100 border flex flex-col border-green-400 text-green-700 px-4 py-3 rounded relative'
      role='alert'
    >
      <strong className='font-bold'>Correct!</strong>
      <span className='block sm:inline'>You got it right!</span>
    </div>
  );
};

export default CorrectAnswer;
