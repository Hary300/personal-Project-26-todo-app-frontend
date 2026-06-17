import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/shared/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '../schemas/auth.schema';
import { toast } from 'sonner';
import { sendDataRegister } from '@/services/user.service';
import axios from 'axios';

export default function Register() {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: {
      username: 'BEN',
      email: 'ben@mail.com',
      password: 'kopipanas',
      confirmPassword: 'kopipanas',
    },
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log(data);

      await sendDataRegister(data);

      toast.success('New account has been created. Please Login', {
        position: 'top-center',
      });
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.dir(error);
        toast.error(
          `${error.response?.data.message}. Failed to create new account.`,
          {
            position: 'top-center',
          }
        );
      }
    }
  };

  return (
    <div className='container-custom'>
      <form className='flex flex-col gap-3xl' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-display-xs lg:text-display-sm'>
          Register
        </h1>
        <p className='lg:text-base'>
          Create your free account and start achieving more today
        </p>

        {/* name  */}
        <div className='flex flex-col gap-1'>
          <div
            id='name-field'
            className='flex flex-col-reverse border border-neutral-400 rounded-md py-md px-lg'
          >
            <input
              type='text'
              id='username'
              placeholder='Username'
              className='peer focus:outline-0 focus:placeholder-transparent'
              {...register('username')}
            />

            <label
              htmlFor='username'
              className='hidden peer-focus:block leading-4 text-xs text-neutral-600'
            >
              Username
            </label>
          </div>
          {errors.username && (
            <p className='text-sm text-accent-red'>{errors.username.message}</p>
          )}
        </div>

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

        {/* confirm password */}
        <div className='flex flex-col gap-1'>
          <div
            id='confirm-password-field'
            className='flex flex-col-reverse border border-neutral-400 rounded-md py-md px-lg'
          >
            <input
              type='password'
              id='confirm-password'
              placeholder='Confirm Password'
              className='peer focus:outline-0 focus:placeholder-transparent'
              {...register('confirmPassword')}
            />
            <label
              htmlFor='confirm-password'
              className='hidden peer-focus:block leading-4 text-xs text-neutral-600'
            >
              Confirm Password
            </label>
          </div>
          {errors.confirmPassword && (
            <p className='text-sm text-accent-red'>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* button submit */}
        <div>
          <Button type='submit' title='Submit' isSubmitting={isSubmitting} />
        </div>

        {/* Have an account */}
        <p className='text-center lg:text-base'>
          Already have an account?{' '}
          <Link to='/login' className='font-bold text-sm text-primary'>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
