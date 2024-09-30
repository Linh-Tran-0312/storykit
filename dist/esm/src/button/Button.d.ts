import * as React from 'react';
import './Button.css';
type ButtonProps = {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
};
declare const Button: ({ variant, children }: ButtonProps) => JSX.Element;
export default Button;
