import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;

  padding: 0.5rem 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 1.75rem;
  }
`;

export const Message = styled.span`
  line-height: 1.75rem;
  font-size: 0.75rem;
  font-style: italic;
  color: #f4f2ed;
`;

export const LinkIcons = styled.div`
  height: 1.75rem;
  min-width: 5rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Social = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: #f4f2ed;
`;
