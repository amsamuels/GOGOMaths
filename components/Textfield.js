import React from 'react';

const TextField = ({ label, name, register, inputProps }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-lg text-teal-900'>{label}</label>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
        {...(register && register(name))}
        {...inputProps}
      />
    </div>
  );
};

export default TextField;
