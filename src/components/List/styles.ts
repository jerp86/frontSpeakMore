import styled from 'styled-components';

export const Container = styled.ul`
  width: 50%;
  padding: 0.625rem;

  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 0.9375rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;
  overflow: hidden;
`;

export const P = styled.p`
  margin: 0.5rem auto 0;
  font-weight: 700;
  font-size: 1.5rem;

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
