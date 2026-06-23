import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'logoutButton';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', className = '', children, ...prop }, ref) => {
    const baseStyle = 'w-full cursor-pointer';

    const variantStyle = {
      default:
        'text-white font-semibold text-sm p-md bg-primary rounded-md disabled:bg-gray-400 cursor-pointer',
      logoutButton: 'text-left',
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
