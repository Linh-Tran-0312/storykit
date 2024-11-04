import * as React from 'react';
import './Button.css';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'error';
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
