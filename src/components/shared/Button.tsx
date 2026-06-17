type ButtonProps = {
  type: 'submit' | 'button';
  title: string;
  isSubmitting?: boolean;
  onClick?: () => void;
};
export default function Button({
  type,
  title,
  isSubmitting,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className='w-full text-white font-semibold text-sm p-md bg-primary rounded-md cursor-pointer disabled:bg-gray-400'
      disabled={isSubmitting}
      onClick={onClick}
    >
      {type === 'submit' && isSubmitting ? 'Loading...' : title}
    </button>
  );
}
