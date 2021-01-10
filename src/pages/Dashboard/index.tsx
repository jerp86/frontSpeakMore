import React from 'react';

import { Link } from 'react-router-dom';
import { ButtonModify, Container, Enter, Title } from './styles';

import Footer from '../../components/Footer';
import List from '../../components/List';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Bem vindo ao FaleMais - VxTel®</Title>

      <List />
      <Enter>
        <Link to="/speakmore">
          <ButtonModify>Vamos comparar?</ButtonModify>
        </Link>
      </Enter>
      <Footer />
    </Container>
  );
};

export default Dashboard;
