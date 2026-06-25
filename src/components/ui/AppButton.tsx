import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'logoutButton' | 'ghost';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', className = '', children, ...prop }, ref) => {
    const baseStyle = 'w-full cursor-pointer';

    const variantStyle = {
      default:
        'text-white font-semibold text-sm p-md bg-primary hover:bg-[#2563EB] active:bg-[#1D4ED8] rounded-md disabled:bg-gray-400 cursor-pointer',
      logoutButton: 'text-left',
      ghost: '',
    };

    return (
      <button
        ref={ref}
        {...prop}
        className={`${baseStyle} ${variantStyle[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
