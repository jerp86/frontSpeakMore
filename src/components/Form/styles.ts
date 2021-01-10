import styled from 'styled-components';
import Button from '../Button';

export const Second = styled.div`
  color: #8e734a;
  width: 50%;
  padding: 1rem;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const ContentForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0.5rem;
    font-size: 1.25rem;
    line-height: 2.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 500px) {
      font-size: 0.875rem;
    }
  }

  input,
  select {
    height: 2.5rem;
    min-width: 9.375rem;
    border: none;
    background-color: #ecf0f9;
    padding: 0.5rem;
    color: #8e734a;

    @media (max-width: 768px) {
      min-width: 5rem;
    }

    :hover {
      background-color: #e3effa;
    }
  }

  input {
    &::placeholder {
      color: #8e734a;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: #b92c2c;
    }
  }
`;

export const ButtonList = styled(Button)`
  font-size: 1.5rem;
  background-color: #8e734a;

  @media (max-width: 768) {
    font-size: 1rem;
  }

  @media (max-width: 500) {
    font-size: 0.875rem;
  }
`;

export const Results = styled.div``;
