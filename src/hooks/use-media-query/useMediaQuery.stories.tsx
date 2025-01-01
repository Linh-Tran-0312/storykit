import type { Meta, StoryFn } from '@storybook/react';
import color from 'tokens/color';
import React from 'react';
import useMediaQuery from './useMediaQuery';
import styled from 'styled-components';
//👇 This default export determines where your story goes in the story list
const meta: Meta = {
  title: 'Custom Hooks/useMediaQuery',
};

export default meta;
const EXAMPLE_MEDIA_QUERY = '(max-width: 900px)';
const Container = styled.div`
  width: 100%;
  border: 2px solid ${color.primary};
  height: 300px;
`;
export const Playground: StoryFn = () => {
  const matches = useMediaQuery(EXAMPLE_MEDIA_QUERY);

  return (
    <Container className='flex flex-col justify-center items-center'>
      <h3 style={{ color: matches ? color.error : color.primary }}>
        The wide screen is {matches ? 'less' : 'more'} than 900px
      </h3>
      <span>Try to resize the window</span>
    </Container>
  );
};
