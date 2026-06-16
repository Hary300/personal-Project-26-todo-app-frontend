type ButtonProps = {
  type?: 'submit' | 'button';
  title: string;
  isSubmitting?: boolean;
};
export default function Button({
  type = 'button',
  title,
  isSubmitting,
}: ButtonProps) {
  return (
    <button
      type={type}
      className='w-full text-white font-semibold text-sm p-md bg-primary rounded-md cursor-pointer disabled:bg-gray-400'
      disabled={isSubmitting}
    >
      {type === 'submit' && isSubmitting ? 'Loading...' : title}
    </button>
  );
}
