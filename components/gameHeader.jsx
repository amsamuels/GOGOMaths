import React from 'react';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';

const GameHeader = () => {
  const [nickname, setNickname] = React.useState('');
  const [score, setScore] = React.useState('');

  const getUserName = async () => {
    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('playerId');
      if (userId) {
        const docRef = doc(db, 'players', userId);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setNickname(data.nickname);
          setScore(data.score);
        } else {
          console.log('No such document!');
        }
      }
    }
  };

  getUserName();
  return (
    <>
      <header className='bg-[#FCF8F1] bg-opacity-30 pb-12'>
        <div className='px-4 mx-auto pt-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16 lg:h-20'>
            <div className='flex-shrink-0'>
              <a href='#' title='' className='flex'>
                <Image
                  src='/mathslogo.png'
                  alt="nexxel's avatar"
                  width={100}
                  height={100}
                  className='rounded-full border-none m-0 font-bold'
                />
              </a>
            </div>
            <div className='flex items-center md:mt-0 mt-10 '>
              <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3'>
                <div className=' lg:inline-flex items-center  rounded-md justify-center px-2 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black'>
                  <div className='flex items-center'>
                    <span className=' md:px-3 md:py-2 px-2 py-1'>PLAYER</span>
                    <span className=' rounded-md bg-slate-500 mx-1 px-5 py-2'>
                      {nickname}
                    </span>
                  </div>
                </div>

                <div className=' lg:inline-flex items-center rounded-md justify-center px-2 py-2 w-32 md:w-36 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black'>
                  <div className='flex  items-center'>
                    <span className=' md:px-3 md:py-2  px-2 py-1'>SCORE</span>
                    <span className=' rounded-md bg-slate-500 mx-1 px-3 py-2 md:px-5 md:py-2'>
                      {score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default GameHeader;
