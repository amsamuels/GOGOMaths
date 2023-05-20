import { useState } from 'react';

export default function Modal({
  response,
  explanation,
  showModal,
  questionCount,
  totalQuestions,
  handleGameFinished,
  handleNextQuestionClick,
  customClassName,
  isLoser,
}) {
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div
                className={`${customClassName}border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none `}
              >
                {/*header*/}
                <div
                  className={`${customClassName}flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t`}
                >
                  <h3 className='text-3xl font-semibold'>{response}</h3>
                </div>
                {/*body*/}
                <div className='relative p-3 flex-auto'>
                  <p className='my-4 text-slate-500 text-base leading-relaxed'>
                    {explanation}
                  </p>
                </div>
                {/*footer*/}

                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  {isLoser || questionCount === totalQuestions ? (
                    <button
                      className='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                      style={{ transition: 'all .15s ease' }}
                      onClick={handleGameFinished}
                    >
                      End Game
                    </button>
                  ) : (
                    <button
                      className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={handleNextQuestionClick}
                    >
                      Next Question
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
