import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.625rem 1.25rem;
  margin: 0.3125rem 0;

  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: 0.5s;

  :nth-child(1) {
    background-color: rgba(255, 255, 255, 0.8);
    color: #8e734a;
    font-weight: 700;
  }

  :nth-child(2) {
    background-color: rgba(255, 255, 255, 0.5);
  }

  :nth-child(3) {
    background-color: rgba(255, 255, 255, 0.4);
  }

  :nth-child(4) {
    background-color: rgba(255, 255, 255, 0.3);
  }

  :nth-child(5) {
    background-color: rgba(255, 255, 255, 0.2);
  }

  :hover {
    transform: scale(1.08);
    background-color: #8e734a;
  }

  :nth-child(1):hover {
    background-color: #f4f2ed;
  }

  @media (max-width: 550px) {
    font-size: 0.75rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }

  @media (max-width: 350px) {
    font-size: 0.5rem;
  }
`;
