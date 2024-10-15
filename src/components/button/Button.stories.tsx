import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import React from 'react';
import Button from './Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button Story',
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'error']
        },
        children: {
            options: ['Button']
        }
    },
  };

export default meta;

export const PrimaryButton: StoryFn<typeof Button> = () => {
    return(
        <Button variant='primary'>Primary</Button>
    )
}
export const Template: StoryObj<typeof Button> = {
    args: {
        variant: 'secondary',
        children: 'Secondary'
    }
}



  