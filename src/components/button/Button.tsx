import * as React from 'react';
import './Button.css';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
};

const Button = ({ variant, children }: ButtonProps) => {
    const a = 2;
  return (
    <button className={`btn btn-default btn-${variant}`}>{children}</button>
  );
};
export default Button;
