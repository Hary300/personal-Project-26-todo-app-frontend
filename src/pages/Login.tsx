import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, type LoginFormData } from '../schemas/auth.schema';
import { sendDataLogin } from '../services/user.service';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import { toast } from 'sonner';
import axios from 'axios';

export default function Login() {
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
      toast.success(result.message, { position: 'top-center' });
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error('Login failed');
        console.log(error.response?.data.message);
      }
    }
  };
  return (
    <div className='container-custom'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3xl'>
        <h1 className='font-bold text-display-xs lg:text-display-sm'>Login</h1>
        <p className='lg:text-base'>
          Welcome back! Stay on top of your tasks and goals
        </p>

        {/* email */}
        <div className='flex flex-col gap-1'>
          <div
            id='email-field'
            className='flex flex-col-reverse border border-neutral-400 rounded-md py-md px-lg'
          >
            <input
              type='email'
              id='email'
              placeholder='Email'
              className='peer focus:outline-0 focus:placeholder-transparent'
              {...register('email')}
            />
            <label
              htmlFor='email'
              className='hidden peer-focus:block leading-4 text-xs text-neutral-600'
            >
              Email
            </label>
          </div>
          {errors.email && (
            <p className='text-sm text-accent-red'>{errors.email.message}</p>
          )}
        </div>

        {/* password */}
        <div className='flex flex-col gap-1'>
          <div
            id='password-field'
            className='flex flex-col-reverse border border-neutral-400 rounded-md py-md px-lg'
          >
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='peer focus:outline-0 focus:placeholder-transparent'
              {...register('password')}
            />
            <label
              htmlFor='password'
              className='hidden peer-focus:block leading-4 text-xs text-neutral-600'
            >
              Password
            </label>
          </div>
          {errors.password && (
            <p className='text-sm text-accent-red'>{errors.password.message}</p>
          )}
        </div>

        {/* button submit */}
        <div>
          <Button type='submit' title='Login' isSubmitting={isSubmitting} />
        </div>

        {/* Have an account */}
        <p className='text-center lg:text-base'>
          Don't have an account?{' '}
          <Link to='/register' className='font-bold text-sm text-primary'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
