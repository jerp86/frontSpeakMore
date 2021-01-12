import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, First, Results } from './styles';

import Form from '../../components/Form';
import Footer from '../../components/Footer';
import { useCalc } from '../../hooks/calculate';

const SpeakMore: React.FC = () => {
  const { data } = useCalc();
  const getResults = useCallback(
    () => (
      <Results>
        <h2>
          <span>
            Com FaleMais:{' '}
            {data?.speakMore.toLocaleString('PT-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </h2>
        <h2>
          Sem FaleMais:{' '}
          <span>
            {data?.competition.toLocaleString('PT-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </h2>
      </Results>
    ),
    [data?.competition, data?.speakMore],
  );

  return (
    <Container>
      <Content>
        <First>
          <h2>
            Conheça o <br /> <Link to="/">FaleMais</Link> VxTel©
          </h2>
          <p>Compare o custo de suas ligações</p>
        </First>

        <Form />
      </Content>

      {data && getResults()}
      <Footer />
    </Container>
  );
};

export default SpeakMore;
