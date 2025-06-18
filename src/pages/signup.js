"use client"
import { useForm } from 'react-hook-form';
import api from '../utils/api';

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post('/signup', data);
      alert('Signup successful! Now login.');
    } catch (err) {
     // alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
      <h2 className="text-xl">Signup</h2>
      <input {...register('username')} placeholder="Username" className="border px-2" />
      <input type="password" {...register('password')} placeholder="Password" className="border px-2" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Signup</button>
    </form>
  );
}
