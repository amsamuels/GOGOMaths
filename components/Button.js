const Button = ({ onClick, children }) => {
  return (
    <button
      className=' text-white py-3 px-6 text-lg rounded-md w-48 bg-sky-900 hover:bg-teal-700 border-gray-200 '
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
