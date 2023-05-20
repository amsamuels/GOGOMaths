import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import TextField from './Textfield';
import Button from './Button';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const UserForm = ({ getUserName }) => {
  const schema = z.object({
    nickname: z.string().min(3).max(20),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    if (typeof window !== 'undefined') {
      const playersRef = await addDoc(collection(db, 'players'), {
        nickname: data.nickname,
        score: 0,
      });
      const newPlayerId = playersRef.id;
      localStorage.setItem('playerId', newPlayerId);
      getUserName(); // <-- call the function here
    }
  };
  return (
    <div className='flex items-center justify-center px-4 py-8 mx-auto  lg:py-0'>
      <div className='w-full bg-gray-200 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label={'Nickname'}
              name='nickname'
              register={register}
              inputProps={{ type: 'text', placeholder: 'Nickname' }}
            />
            <br />
            <Button type='submit'>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
