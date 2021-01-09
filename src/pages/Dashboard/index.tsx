import React from 'react';

import { Container, Title } from './styles';

import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Bem vindo ao FaleMais - VxTel®</Title>
      <Footer />
    </Container>
  );
};

export default Dashboard;
