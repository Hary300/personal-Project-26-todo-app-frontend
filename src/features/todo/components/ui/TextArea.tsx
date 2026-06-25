import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

type TextAreaProps<T extends FieldValues> = {
  name: FieldPath<T>;
  errorMessage?: string;
  register: UseFormRegister<T>;
};

export default function TextArea<T extends FieldValues>({
  name,
  errorMessage,
  register,
}: TextAreaProps<T>) {
  return (
    <div className='flex flex-col gap-1'>
      <div
        id={`${name}-field`}
        className='flex flex-col-reverse border rounded-md py-md px-lg'
      >
        <textarea
          id={name}
          placeholder='Enter your task'
          className='peer focus:outline-0 focus:placeholder-transparent h-28'
          {...register(name)}
        ></textarea>

        <label
          htmlFor={name}
          className='hidden peer-focus:block leading-4 text-xs text-neutral-600'
        >
          Enter your task
        </label>
      </div>
      {errorMessage && (
        <p
          className={`text-sm text-accent-red opacity-0 ${errorMessage && 'opacity-100'}`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
