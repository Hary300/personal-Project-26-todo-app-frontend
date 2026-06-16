import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '../schemas/auth.schema';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };
  return (
    <div className='container px-3xl flex justify-center min-h-screen items-center'>
      <form className='flex flex-col gap-3xl' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-display-xs lg:text-display-sm'>
          Register
        </h1>
        <p className='lg:text-base'>
          Create your free account and start achieving more today
        </p>

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

        <div className='flex flex-col gap-1'>
          <div
            id='email-field'
            className='flex flex-col-reverse border border-neutral-400 rounded-md py-md px-lg'
          >
            <input
              type='text'
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

        <div>
          <Button type='submit' title={'Submit'} />
        </div>
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
