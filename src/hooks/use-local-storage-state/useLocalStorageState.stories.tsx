import type { Meta } from '@storybook/react';
import { Button } from 'components/common-components/button';
import React from 'react';
import useLocalStorageState from './useLocalStorageState';
//👇 This default export determines where your story goes in the story list
const meta: Meta = {
  title: 'Custom Hooks/useLocalStorageState',
};

export default meta;

export const Playground = () => {
  const [text, setText] = React.useState('');
  const [state, setState] = useLocalStorageState<string>('localItem');

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
          Save to local
        </Button>
      </div>
      <span>Try to refresh the browser: {state}</span>
    </div>
  );
};
