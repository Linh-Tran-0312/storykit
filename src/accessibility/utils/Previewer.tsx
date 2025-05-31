import React, { FC } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const PreviewContainer = styled.div`
  width: 30%;
  height: 100%;
  min-width: 300px;
  padding: 1rem;
  background-color: rgb(240, 240, 240);
  border: 1px solid #ddd;
`;

export const Previewer: FC<{ children: React.ReactNode; code: string }> = ({
  children,
  code,
}) => {
  return (
    <Container>
      <PreviewContainer>
        <pre>{code}</pre>
      </PreviewContainer>
      <div className='pa-4'>{children}</div>
    </Container>
  );
};
