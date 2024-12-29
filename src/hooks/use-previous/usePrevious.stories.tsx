import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'components/common-components/button';
import React from 'react';
import usePrevious from './usePrevious';
//👇 This default export determines where your story goes in the story list
const meta: Meta = {
  title: 'Custom Hooks/usePrevious',
};

export default meta;

export const Playground: StoryFn = () => {
  const [text, setText] = React.useState('');
  const [state, setState] = React.useState('');
  const previousValue = usePrevious(state);

  return (
    <div>
      <div className='my-2'>
        <label htmlFor='key'>Input</label>
        <input
          type='text'
          id={'value'}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='mx-2'
        />
        <Button
          variant='primary'
          onClick={() => {
            setState(text);
            setText('');
          }}
        >
          Save
        </Button>
      </div>
      <span>Previous value: {previousValue}</span>
    </div>
  );
};
