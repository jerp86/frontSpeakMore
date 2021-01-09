import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  from {
    transform: rotate(0deg);
  }
`;

export const Container = styled.button`
  background: #b92c2c;
  height: 3.5rem;
  border-radius: 0.625rem;
  border: 0;
  padding: 1rem;
  color: #f4f2ed;
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#b92c2c')};
  }
  svg {
    animation: ${spin} 2s linear infinite;
  }
`;
