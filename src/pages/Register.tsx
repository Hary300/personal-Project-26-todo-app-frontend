import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import { useForm, useWatch } from 'react-hook-form';

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const { register, handleSubmit, formState, control } = useForm<FormData>();
  const { errors } = formState;
  const password = useWatch({ control, name: 'password' });

  const onSubmit = (data: FormData) => {
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
              {...register('username', {
                required: 'Username cannot be empty',
              })}
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
              {...register('email', {
                required: 'Email cannot be empty',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Email is not valid',
                },
              })}
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
              {...register('password', {
                required: 'Password cannot be empty',
                minLength: {
                  value: 6,
                  message: 'Min 6 characters',
                },
              })}
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
              {...register('confirmPassword', {
                required: 'Confirm password cannot be empty',
                validate: (value) =>
                  value === password || 'Password does not match',
              })}
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
        <p className='text-center lg:text-base text-neutral-'>
          Already have an account?{' '}
          <Link to='/login' className='font-bold text-sm text-primary'>
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
