import { useEffect } from 'react';

const Timer = ({ setCountdown, countdown }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1); // Decrement the countdown every second
      } else {
        clearInterval(interval); // Stop the interval when the countdown reaches 0
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval
  }, [countdown]);

  return (
    <div className='text-center font-bold md:text-3xl text-xl bg-gray-100 md:p-4 p-2 mb-2 rounded-md'>
      {countdown > 0 ? (
        <div> Timer {countdown}</div> // Show the countdown time
      ) : (
        <div>Out Of Time !</div> // Show a message when the countdown is over
      )}
    </div>
  );
};

export default Timer;
