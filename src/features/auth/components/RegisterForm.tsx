import { useForm } from 'react-hook-form';
import type { RegisterFormData } from '../types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../schemas/auth.schema';
import { Link, useNavigate } from 'react-router-dom';
import { sendDataRegister } from '../services/auth.service';
import axios from 'axios';
import { toast } from 'sonner';
import Button from '@/components/Button';
import AuthInputField from './AuthInputField';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
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
    <form className='flex flex-col gap-3xl' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='font-bold text-display-xs lg:text-display-sm'>Register</h1>
      <p className='lg:text-base'>
        Create your free account and start achieving more today
      </p>

      {/* name  */}
      <AuthInputField<RegisterFormData>
        type='text'
        name='username'
        register={register}
        errorMessage={errors.username?.message}
      />

      {/* email */}
      <AuthInputField<RegisterFormData>
        type='email'
        name='email'
        register={register}
        errorMessage={errors.email?.message}
      />

      {/* password */}
      <AuthInputField<RegisterFormData>
        type='password'
        name='password'
        register={register}
        errorMessage={errors.password?.message}
      />

      {/* confirm password */}
      <AuthInputField<RegisterFormData>
        type='password'
        name='confirmPassword'
        register={register}
        errorMessage={errors.confirmPassword?.message}
      />

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
  );
}
