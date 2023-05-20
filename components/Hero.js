import React from 'react';
import Link from 'next/link';
import Arrow from './Arrow';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-12 lg:py-20'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
          <div>
            <p className='text-base font-semibold tracking-wider text-blue-600 uppercase'>
              A Game platform for learners
            </p>
            <h1 className='mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl'>
              Play & learn by playing games
            </h1>
            <p className='mt-4 text-base text-black lg:mt-8 sm:text-xl'>
              Grow your knowledge by playing games
            </p>

            <Link
              href='/play'
              title=''
              className='inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400'
              role='button'
            >
              Play & Learn for free
              <Arrow />
            </Link>

            <p className='mt-5 text-gray-600'>
              Already joined?{' '}
              <Link
                href='/play'
                title=''
                className='text-black transition-all duration-200 hover:underline'
              >
                Play Now
              </Link>
            </p>
          </div>

          <div>
            <Image
              src='/operators.png'
              alt='hero'
              width={100}
              height={100}
              className=' w-full border-none m-0 font-bold'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
