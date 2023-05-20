import React from 'react';
import Card from '../components/Card';
import Link from 'next/link';

export const MidSection = ({ count }) => {
  return (
    <section className='py-12 bg-gray-50 sm:py-16 lg:py-20'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <p className='text-lg font-medium text-gray-600 font-pj'>
              {`${count} students have played this game`}
            </p>
            <h2 className='mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj'>
              See how you compare to your peers
            </h2>
          </div>

          <div className='mt-8 text-center md:mt-16 md:order-3'>
            <Link
              href='/leaderboard'
              className='pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600'
            >
              View Leaderboard
            </Link>
          </div>

          <div className='relative mt-10 md:mt-24 md:order-2'>
            <div className='absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6'>
              <div className='w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter'></div>
            </div>

            <div className='relative grid max-w-lg grid-cols-1 gap-4 mx-auto md:max-w-none lg:gap-8 md:grid-cols-4'>
              <div className='flex flex-col overflow-hidden shadow-xl'>
                <div className='flex flex-col justify-between flex-1 p-3 bg-white lg:py-8 lg:px-4'>
                  <div className='flex-1'>
                    <Card> Play and learn Subtraction (-)</Card>
                  </div>
                </div>
              </div>

              <div className='flex flex-col overflow-hidden shadow-xl'>
                <div className='flex flex-col justify-between flex-1 p-3 bg-white lg:py-8 lg:px-4'>
                  <div className='flex-1'>
                    <Card>Play and learn Addition (+)</Card>
                  </div>
                </div>
              </div>

              <div className='flex flex-col overflow-hidden shadow-xl'>
                <div className='flex flex-col justify-between flex-1 p-3 bg-white lg:py-8 lg:px-4'>
                  <Card>Play and learn Division (/)</Card>
                </div>
              </div>

              <div className='flex flex-col overflow-hidden shadow-xl'>
                <div className='flex flex-col justify-between flex-1 p-3 bg-white lg:py-8 lg:px-4'>
                  <Card>Play and learn Multiplication (x)</Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
