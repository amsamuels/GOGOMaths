import React, { useState } from 'react';
import Button from './Button';
import Link from 'next/link';

//
export default function PickMode({ nickname, playerScore }) {
  const [showOptions, setShowOptions] = useState(false);

  const selectMode = () => {
    setShowOptions(!showOptions);
  };
  const [buttons, setButtons] = useState([
    {
      id: 1,
      enabled: true,
      mode: 'Easy',
      levels: [
        {
          level_id: 1,
          level: 'Level 1',
          enabled: true,
          onClick: () => setLevel('level_1'),
        },
        {
          level_id: 2,
          level: 'Level 2',
          enabled: playerScore >= 100,
          onClick: () => setLevel('level_2'),
        },
        {
          level_id: 3,
          level: 'Level 3',
          enabled: playerScore >= 200,
          onClick: () => setLevel('level_3'),
        },
      ],
      gameMode: 'easy',
    },
    {
      id: 2,
      enabled: playerScore >= 300,
      mode: 'Medium',
      levels: [
        {
          level_id: 1,
          level: 'Level 1',
          enabled: playerScore >= 300,
          onClick: () => setLevel('level_1'),
        },
        {
          level_id: 2,
          level: 'Level 2',
          enabled: playerScore >= 400,
          onClick: () => setLevel('level_2'),
        },
        {
          level_id: 3,
          level: 'Level 3',
          enabled: playerScore >= 500,
          onClick: () => setLevel('level_3'),
        },
      ],
      gameMode: 'medium',
    },
    {
      id: 3,
      enabled: playerScore >= 750,
      mode: 'Hard',
      levels: [
        {
          level_id: 1,
          level: 'Level 1',
          enabled: playerScore >= 750,
          onClick: () => setLevel('level_1'),
        },
        {
          level_id: 2,
          level: 'Level 2',
          enabled: playerScore >= 1000,
          onClick: () => setLevel('level_2'),
        },
        {
          level_id: 3,
          level: 'Level 3',
          enabled: playerScore >= 1250,
          onClick: () => setLevel('level_3'),
        },
      ],
      gameMode: 'hard',
    },
  ]);

  const [level, setLevel] = useState('');
  const [selectedMode, setSelectedMode] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedGameMode, setSelectedGameMode] = useState(null);
  return (
    <div className='flex items-center justify-center px-4 py-8 mx-auto  lg:py-0'>
      <div className='w-full bg-gray-200 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-3 space-y-4 md:space-y-6 sm:p-8'>
          <div className='text-sm text-gray-600'>
            You are logged in as{' '}
            <span className=' text-lg font-semibold'>{nickname}, </span>
            Press play to start the game
          </div>
          <Button onClick={selectMode}>Start Game</Button>
          {showOptions && (
            <>
              <div className='space-y-2 pt-6'>
                <div className='flex flex-row space-x-2 items-center justify-center'>
                  {buttons.map(({ id, enabled, mode, gameMode, onClick }) => {
                    const isSelected = selectedMode === mode;
                    return (
                      <div
                        key={id}
                        className={
                          enabled
                            ? 'font-bold text-white py-3 px-3 text-lg rounded-md bg-teal-700 border-gray-200'
                            : 'opacity-50 cursor-not-allowed font-bold text-white py-3 px-3 text-lg rounded-md bg-teal-700 border-gray-200'
                        }
                      >
                        <button
                          onClick={() => {
                            if (enabled) {
                              setSelectedMode(mode);
                              setSelectedGameMode(gameMode);
                              setSelectedLevel(null); // Reset selected level when mode is changed
                              setButtons((prevButtons) => {
                                return prevButtons.map((button) => {
                                  return {
                                    ...button,
                                    enabled: button.id === id ? true : false,
                                  };
                                });
                              });
                            }
                          }}
                        >
                          <div onClick={onClick}>
                            <h2 className=' font-sans font-medium text-xl '>
                              {mode}
                            </h2>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
                {selectedMode && (
                  <>
                    <div className='flex flex-row space-x-2 items-center justify-center'>
                      {buttons
                        .find((button) => button.mode === selectedMode)
                        .levels.map((level) => (
                          <div key={level.level}>
                            <button
                              className={
                                level.enabled
                                  ? 'font-bold text-white py-3 px-3 text-lg rounded-md bg-teal-700 border-gray-200'
                                  : 'opacity-50 cursor-not-allowed font-bold text-white py-3 px-3 text-lg rounded-md bg-teal-700 border-gray-200'
                              }
                              onClick={() => {
                                if (level.enabled) {
                                  setSelectedLevel(level.level);
                                  level.onClick();
                                }
                              }}
                            >
                              <h2 className=' font-sans font-medium text-xl '>
                                {level.level}
                              </h2>
                            </button>
                          </div>
                        ))}
                    </div>

                    {selectedLevel && (
                      <div className='flex  py-4 items-center justify-center'>
                        <Link
                          href='/playgame/[gameMode]/[gameLevel]'
                          as={`/playgame/${selectedGameMode}/${level}`}
                        >
                          <Button>Play </Button>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
