type ButtonProps = {
  type: 'submit' | 'button';
  title: string;
  disabled?: boolean;
  onClick?: () => void;
};
export default function Button({
  type,
  title,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className='w-full text-white font-semibold text-sm p-md bg-primary rounded-md cursor-pointer disabled:bg-gray-400'
      disabled={disabled}
      onClick={onClick}
    >
      {type === 'submit' && disabled ? 'Loading...' : title}
    </button>
  );
}
