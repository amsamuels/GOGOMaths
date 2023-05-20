import Stars from './Stars';

const Card = ({ children, className, ...props }) => {
  return (
    <div className='flex-1'>
      <Stars />
      <h2 className='my-4 text-3xl font-bold text-center  text-gray-900  sm:text-4xl  font-pj'>
        {children}
      </h2>
    </div>
  );
};

export default Card;
