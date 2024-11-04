import * as React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  variant: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <button className={`btn btn-default btn-${variant}`} {...props}>{children}</button>
  );
};
export default Button;
