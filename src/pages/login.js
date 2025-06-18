import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import api from '../utils/api';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await api.post('/login', data);
      localStorage.setItem('token', res.data.token); // save JWT
      router.push('/dashboard');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
      <h2 className="text-xl">Login</h2>
      <input {...register('username')} placeholder="Username" className="border px-2" />
      <input type="password" {...register('password')} placeholder="Password" className="border px-2" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Login</button>
    </form>
  );
}
