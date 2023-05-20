import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { db } from '../../../firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import Questions from '../../../components/Questions';
import ScoreCard from '../../../components/ScoreCard';
import Timer from '../../../components/Timer';
import Modal from '../../../components/Modal';
import { HangmanDrawing } from '../../../components/HangManDrawing';

export default function PlayGame() {
  const router = useRouter();
  const { gameMode, gameLevel } = router.query;
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [nickname, setNickname] = useState('');
  const [score, setScore] = useState('');
  const [gameScore, setGameScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(30); // Set initial countdown time to 60 seconds
  const [answerIsIncorrect, setAnswerIsIncorrect] = useState([]);

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

  const getQuizQuestions = async () => {
    try {
      const quizQuestionArray = [];
      const query = await getDocs(
        collection(db, 'questions', gameMode, gameLevel)
      );
      if (query.empty) {
        console.log('No documents found in the collection.');
        return router.push('/play');
      }
      query.forEach((doc) => {
        quizQuestionArray.push(doc.data());
      });
      return quizQuestionArray;
    } catch (error) {
      console.log('Error getting documents: ');
      router.push('/play');
    }
  };

  const handleNextQuestionClick = async () => {
    setIsAnswered(false);
    setShowModal(false);
    setCountdown(30); // Reset the countdown time to 60 seconds
    setCorrectAnswer(false);
    setWrongAnswer(false);
    setIsSelected(null);
    const Questions = await getQuizQuestions();
    if (Questions && Questions.length > 0) {
      const totalQuestions = Questions.length;
      setTotalQuestions(totalQuestions - 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuizQuestions(Questions[currentQuestionIndex + 1]);
      setQuestionCount(questionCount + 1);
      handleScore();
    }
  };

  const handleAnswerClick = (option) => {
    if (option === quizQuestions.correctAnswer) {
      setRightAnswers(rightAnswers + 1);
      setShowModal(true);
      setCorrectAnswer(true);
      setIsAnswered(true);
      handleScore();
    }
    if (option !== quizQuestions.correctAnswer) {
      setWrongAnswer(true);
      setShowModal(true);
      // Code for wrong answer
      setAnswerIsIncorrect([...answerIsIncorrect, incorrectAnswer]);
      setIncorrectAnswer(incorrectAnswer + 1);
      setIsAnswered(true);
    }
  };
  const consecutiveIncorrectAnswers = useMemo(() => {
    return answerIsIncorrect.length;
  }, [answerIsIncorrect]);

  const handleScore = () => {
    const scoringRules = {
      easy: {
        level_1: 10,
        level_2: 20,
        level_3: 30,
      },
      medium: {
        level_1: 40,
        level_2: 50,
        level_3: 60,
      },
      hard: {
        level_1: 70,
        level_2: 80,
        level_3: 90,
      },
    };

    const score = rightAnswers * scoringRules[gameMode][gameLevel];
    setGameScore(score);
  };

  const handleGameFinished = () => {
    setIsFinished(true);
    const newTotalScore = parseInt(score) + gameScore;
    const userId = localStorage.getItem('playerId');
    const docRef = doc(db, 'players', userId);
    const updateScore = async () => {
      await updateDoc(docRef, {
        score: newTotalScore,
      });
    };
    updateScore();
  };

  const isCorrectAnswer = quizQuestions.correctAnswer === isSelected;
  const isLoser = consecutiveIncorrectAnswers >= 6; // If the player has 3 consecutive incorrect answers, they lose the game

  useEffect(() => {
    handleNextQuestionClick();
  }, []);
  useEffect(() => {
    if (isLoser) {
      setShowModal(true);
    }
  }, [isLoser]);

  return (
    <>
      <Head>
        <title>G0 GO MATHS</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {isFinished ? (
          <>
            <div>
              <div className='container mx-auto mt-20 px-6 md:px-12 xl:px-32'>
                <div className='text-center text-gray-800'>
                  <div className='block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12'>
                    <h1 className='text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
                      Congratulations Below Are <br />
                      <span className='text-blue-600'>Your Results</span>
                    </h1>
                    <Link
                      href='/play'
                      className='inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                    >
                      Play New Game
                    </Link>

                    <Link
                      className='inline-block px-7 py-3 font-medium text-sm  bg-transparent text-blue-600  leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
                      href='/leaderboard'
                    >
                      LeaderBoard
                    </Link>
                  </div>
                </div>
              </div>
              <ScoreCard
                nickname={nickname}
                gameScore={gameScore}
                rightAnswers={rightAnswers}
                incorrectAnswers={incorrectAnswer}
              />
            </div>
          </>
        ) : (
          <>
            <>
              <div className='hidden md:block'>
                <ScoreCard
                  nickname={nickname}
                  gameScore={gameScore}
                  rightAnswers={rightAnswers}
                  incorrectAnswers={incorrectAnswer}
                />
              </div>
            </>
            <div className='max-w-800 flex flex-col md:flex-row gap-4 md:mx-24 py-4 items-center'>
              <div className='p-4'>
                {quizQuestions.question && (
                  <div
                    key={quizQuestions.id}
                    className=' text-gray-600 overflow-y-hidden custom-height'
                  >
                    <div className='flex flex-row items-center md:space-x-3 space-x-2'>
                      <h2 className='text-center font-bold md:text-3xl text-xl bg-gray-100 md:p-4 p-2 mb-2 rounded-md'>
                        Question {questionCount} of {totalQuestions}
                      </h2>
                      <h2 className='sm:hidden text-center font-bold md:text-3xl text-xl bg-gray-100 md:p-4 p-2 mb-2 rounded-md'>
                        {rightAnswers} / {totalQuestions} Correct
                      </h2>
                      <Timer
                        setCountdown={setCountdown}
                        countdown={countdown}
                      />
                    </div>
                    <div className='bg-gray-100  p-4 mb-4 rounded-md'>
                      <Questions>{quizQuestions.question}</Questions>
                    </div>
                    <div className='grid grid-rows-2 md:grid-cols-2  items-center'>
                      <div className=' flex md:mx-24  items-center'>
                        <HangmanDrawing
                          consecutiveIncorrectAnswers={
                            consecutiveIncorrectAnswers
                          }
                        />
                      </div>
                      <div className='grid grid-rows-2 grid-cols-2 gap-4 items-center'>
                        {quizQuestions.answerOptions.map((option, index) => (
                          <button
                            key={index}
                            className={
                              isSelected === option
                                ? isCorrectAnswer === true
                                  ? 'bg-green-400 p-6 rounded-md  items-center'
                                  : 'bg-red-400 p-6  rounded-md  items-center'
                                : 'bg-gray-100 p-6  rounded-md  items-center'
                            }
                            onClick={() => {
                              handleAnswerClick(option);
                              setIsSelected(option);
                            }} // Add onClick handler
                            disabled={isAnswered} // Add disabled attribute
                          >
                            <label className='text-gray-700  text-lg'>
                              <div key={index}>{option}</div>
                            </label>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  key={quizQuestions.id}
                  className=' text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12 overflow-y-hidden custom-height'
                >
                  {showModal && (
                    <Modal
                      response={
                        correctAnswer
                          ? 'Correct!'
                          : countdown === 0
                          ? 'TIMES UP!'
                          : isLoser === true
                          ? 'You answered incorrectly 6 times!'
                          : 'Incorrect!'
                      }
                      explanation={
                        correctAnswer
                          ? 'You got it right!'
                          : countdown === 0
                          ? 'You did not answer the question in time! Try again on the next question!'
                          : isLoser === true
                          ? 'You lost the game!'
                          : quizQuestions.explanation
                      }
                      showModal={showModal}
                      questionCount={questionCount}
                      totalQuestions={totalQuestions}
                      handleGameFinished={handleGameFinished}
                      handleNextQuestionClick={handleNextQuestionClick}
                      customClassName={
                        correctAnswer
                          ? 'bg-green-100 border flex flex-col border-green-400 text-green-700 px-4 py-3 rounded relative'
                          : countdown === 0
                          ? 'bg-red-400 border flex flex-col border-red-400 text-red-700 px-4 py-3 rounded relative'
                          : 'bg-red-100 border flex flex-col border-red-400 text-red-700 px-4 py-3 rounded relative'
                      }
                      isLoser={isLoser}
                    />
                  )}
                </div>
              </div>
            </div>
            <>
              {countdown === 0 &&
              isAnswered === false &&
              !showModal &&
              !correctAnswer ? (
                setShowModal(true)
              ) : (
                <></>
              )}
            </>
          </>
        )}
      </main>
    </>
  );
}
