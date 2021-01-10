import React from 'react';

import { Container, Content, First } from './styles';

import Form from '../../components/Form';
import Footer from '../../components/Footer';

const SpeakMore: React.FC = () => (
  <Container>
    <Content>
      <First>
        <h2>
          Conheça o <br /> FaleMais VxTel©
        </h2>
        <p>Compare o custo de suas ligações</p>
      </First>

      <Form />
    </Content>
    <Footer />
  </Container>
);

export default SpeakMore;
