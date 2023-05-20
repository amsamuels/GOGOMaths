import React from 'react';

const GameOver = () => {
  return (
    <div class='container my-12 px-6 mx-auto'>
      <section class='mb-22 text-gray-800 text-center'>
        <div class='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center'>
          <div class='mb-12 lg:mb-0 relative'>
            <h5 class='text-lg text-blue-600 font-bold mb-4'>5000+</h5>
            <h6 class='font-medium text-gray-500'>Components</h6>
            <hr class='absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block' />
          </div>

          <div class='mb-12 lg:mb-0 relative'>
            <svg
              class='w-12 h-12 text-blue-600 mx-auto mb-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z'
              />
            </svg>
            <h5 class='text-lg text-blue-600 font-bold mb-4'>490+</h5>
            <h6 class='font-medium text-gray-500'>Design blocks</h6>
            <hr class='absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block' />
          </div>

          <div class='mb-12 md:mb-0 relative'>
            <svg
              class='w-12 h-12 text-blue-600 mx-auto mb-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z'
              />
            </svg>
            <h5 class='text-lg text-blue-600 font-bold mb-4'>100+</h5>
            <h6 class='font-medium text-gray-500'>Templates</h6>
            <hr class='absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameOver;
