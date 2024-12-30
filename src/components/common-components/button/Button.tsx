import * as React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.className} btn btn-default btn-${variant}`}
    >
      {children}
    </button>
  );
};
export default Button;
