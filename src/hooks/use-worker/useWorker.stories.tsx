import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'components/common-components/button';
import React from 'react';
import useWorker from './useWorker';
//👇 This default export determines where your story goes in the story list
const meta: Meta = {
  title: 'Custom Hooks/useWorker',
};

const countFromZeroTo = (limit) => {
  let count = 0;
  for (let i = 0; i < limit; i++) {
    count += 1;
  }
  return count;
};

const EXAMPLE_TARGET_COUNT = 2000000000;

export const Playground: StoryFn = () => {
  const [isWorkerUsed, setWorkerUsed] = React.useState(false);
  const [targetCount, setTargetCount] = React.useState(EXAMPLE_TARGET_COUNT);
  const [isCountDone, setIsCountDone] = React.useState(false);
  const [colorFlag, setColorFlagFlag] = React.useState(true);

  const { status, workerHandler } = useWorker<number>(countFromZeroTo);

  const startHeavyTask = async () => {
    setIsCountDone(false);
    if (isWorkerUsed) {
      await workerHandler(targetCount);
    } else {
      countFromZeroTo(targetCount);
    }
    setIsCountDone(true);
  };

  return (
    <div>
      <div>
        <Button
          variant='secondary'
          style={{
            backgroundColor: isWorkerUsed ? '#526E48' : '#BCCCDC',
            color: 'white',
          }}
          onClick={() => setWorkerUsed((c) => !c)}
        >
          Turn {isWorkerUsed ? 'Off' : 'On'} Worker
        </Button>
      </div>
      <div>
        <div className='my-2'>
          <label htmlFor='key'>Count from 0 to </label>
          <input
            type='number'
            id={'value'}
            value={targetCount}
            onChange={(e) => {
              setIsCountDone(false);
              setTargetCount(Number(e.target.value));
            }}
            className='mx-2'
          />
          <Button
            variant='primary'
            onClick={() => {
              startHeavyTask();
            }}
          >
            Start count
          </Button>
          <div className='inline mx-2'>
            {isWorkerUsed && status === 'loading' ? 'Worker running...' : ''}{' '}
            {isCountDone ? 'Count Done ✅' : ''}
          </div>
        </div>
      </div>
      <span className='pr-2'>
        Try clicking the button continuously while counting
      </span>
      <Button
        variant='secondary'
        style={{ backgroundColor: colorFlag ? 'red' : 'blue', color: 'white' }}
        onClick={() => setColorFlagFlag((c) => !c)}
      >
        Change colorFlag
      </Button>
    </div>
  );
};

export default meta;
