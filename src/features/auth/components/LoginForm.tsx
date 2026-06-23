import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../schemas/auth.schema';
import { Link, useNavigate } from 'react-router-dom';
import type { LoginFormData } from '../types/types';
import { sendDataLogin } from '../services/auth.service';
import { toast } from 'sonner';
import axios from 'axios';
import Button from '@/components/Button';
import AuthInputField from './AuthInputField';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: 'ben@mail.com',
      password: 'kopipanas',
    },
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await sendDataLogin(data);
      const token = result.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('data', JSON.stringify(result.data));
      toast.success(result.message, { position: 'top-center' });
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('Incorrect email or password. Please try again.', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3xl'>
      <h1 className='font-bold text-display-xs lg:text-display-sm'>Login</h1>
      <p className='lg:text-base'>
        Welcome back! Stay on top of your tasks and goals
      </p>

      {/* email */}
      <AuthInputField<LoginFormData>
        type='email'
        name='email'
        register={register}
        errorMessage={errors.email?.message}
      />

      {/* password */}
      <AuthInputField<LoginFormData>
        type='password'
        name='password'
        register={register}
        errorMessage={errors.password?.message}
      />

      {/* button submit */}
      <div>
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Login'}
        </Button>
      </div>

      {/* Have an account */}
      <p className='text-center lg:text-base'>
        Don't have an account?{' '}
        <Link to='/register' className='font-bold text-sm text-primary'>
          Register
        </Link>
      </p>
    </form>
  );
}
