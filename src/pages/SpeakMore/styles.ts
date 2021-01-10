import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  width: 60vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;

  background-color: #f4f2ed;
  border-radius: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    padding: 0%;
  }

  ::before {
    content: '';
    position: absolute;
    left: 0;

    width: 50%;
    height: 100%;

    background-color: #b92c2c;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    @media (max-width: 500px) {
      position: relative;
    }
  }
`;

export const First = styled.div`
  z-index: 10;
  width: 50%;
  padding: 0.5rem;

  text-align: center;

  background-color: #b92c2c;
  color: #f4f2ed;

  h2 {
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.875rem;

    a {
      color: #f4f2ed;
      display: block;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4f2ed')};
      }
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.625rem;
      line-height: 1.75rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 0.875rem;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
