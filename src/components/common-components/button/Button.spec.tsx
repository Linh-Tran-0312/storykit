import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  // Rendering of Component:  Test if the button renders with children
  test('renders button with children', () => {
    render(<Button variant='primary'>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  // *** Prop Handling ***
  // Prop handling: Test if the button applies primary variant classes correctly
  test('render button with btn-primary class', () => {
    render(<Button variant='primary'>Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });
  // Prop handling: Test if the button applies secondary variant classes correctly
  test('render button with btn-secondary class', () => {
    render(<Button variant='secondary'>Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
  });
  // Prop handling: Test if the button applies error variant classes correctly
  test('render button with btn-error class', () => {
    render(<Button variant='error'>Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-error');
  });

  // *** Event Handling ***
  test('handle click events', () => {
    const handleClick = jest.fn();
    render(
      <Button variant='primary' onClick={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // *** Snapshot testing ***
  test('matches snapshot', () => {
    const { asFragment } = render(<Button variant='primary'>Click me</Button>);
    expect(asFragment).toMatchSnapshot();
  });
});
