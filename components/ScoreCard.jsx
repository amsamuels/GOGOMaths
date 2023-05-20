import React from 'react';

const ScoreCard = ({ nickname, gameScore, rightAnswers, incorrectAnswers }) => {
  return (
    <div className='container my-8 px-6 mx-auto'>
      <section className=' mb-14 text-gray-800 text-center'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center'>
          <div className='mb-8 lg:mb-0 relative'>
            <h5 className='text-lg text-blue-600 font-bold mb-4'>PLAYER</h5>
            <h5 className='text-lg text-blue-300 font-bold '>{nickname}</h5>
            <hr className='absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block' />
          </div>

          <div className='mb-8 lg:mb-0 relative'>
            <h5 className='text-lg text-blue-600 font-bold mb-4'>SCORE</h5>
            <h5 className='text-lg text-blue-300 font-bold '>{gameScore}</h5>
            <hr className='absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block' />
          </div>

          <div className='mb-8 md:mb-0 relative'>
            <h5 className='text-lg text-blue-600 font-bold mb-4'>CORRECT</h5>
            <h6 className='font-medium text-gray-500'>{rightAnswers}</h6>
            <hr className='absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block' />
          </div>

          <div className='mb-12 md:mb-0 relative'>
            <h5 className='text-lg text-blue-600 font-bold mb-4'>INCORRECT</h5>
            <h6 className='font-medium text-gray-500'>{incorrectAnswers}</h6>
            <hr className='absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScoreCard;
