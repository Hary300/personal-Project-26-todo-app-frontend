type ButtonProps = {
  type?: 'submit' | 'button';
  title: string;
};
export default function Button({ type = 'button', title }: ButtonProps) {
  return (
    <button
      type={type}
      className='w-full text-white font-semibold text-sm p-md bg-primary rounded-md cursor-pointer'
    >
      {title}
    </button>
  );
}
