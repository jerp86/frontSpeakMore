import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  color: #f4f2ed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #f4f2ed;
  font-size: 3rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const Enter = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonModify = styled(Button)`
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
