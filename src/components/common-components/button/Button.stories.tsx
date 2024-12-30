import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Common/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'error'],
    },
    children: {
      options: ['Button'],
    },
  },
};

export default meta;

export const Template: StoryObj<typeof Button> = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};
