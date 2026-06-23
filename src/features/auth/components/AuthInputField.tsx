import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

type AuthInputFieldProps<T extends FieldValues> = {
  type: 'text' | 'email' | 'password';
  name: FieldPath<T>;
  errorMessage?: string;
  register: UseFormRegister<T>;
};

export default function AuthInputField<T extends FieldValues>({
  type,
  name,
  errorMessage,
  register,
}: AuthInputFieldProps<T>) {
  const label =
    name.split('')[0].toUpperCase() + name.split('').slice(1).join('');

  return (
    <div className='flex flex-col gap-1'>
      <div
        id={`${name}-field`}
        className='flex flex-col-reverse border border-neutral-400 rounded-md py-md px-lg'
      >
        <input
          type={type}
          id={name}
          placeholder={label}
          className='peer focus:outline-0 focus:placeholder-transparent'
          {...register(name)}
        />

        <label
          htmlFor={name}
          className='hidden peer-focus:block leading-4 text-xs text-neutral-600'
        >
          Username
        </label>
      </div>
      {errorMessage && (
        <p className='text-sm text-accent-red'>{errorMessage}</p>
      )}
    </div>
  );
}
