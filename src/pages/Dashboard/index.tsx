import React from 'react';

import { ButtonModify, Container, Enter, Title } from './styles';

import Footer from '../../components/Footer';
import List from '../../components/List';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Bem vindo ao FaleMais - VxTel®</Title>

      <List />
      <Enter>
        <ButtonModify>Vamos comparar?</ButtonModify>
      </Enter>
      <Footer />
    </Container>
  );
};

export default Dashboard;
