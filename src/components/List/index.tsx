import React, { ReactNode, useEffect, useState } from 'react';

import { Container, P } from './styles';

import ItemList, { ItemListProps } from './ItemList';

const List: React.FC = () => {
  const [plans, setPlans] = useState<ItemListProps[]>([]);

  useEffect(() => {
    const url = 'http:////192.168.15.13:3334/plans';
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setPlans(data.map((plan: ItemListProps) => plan));
      });
  }, []);

  const createList = (list: ItemListProps[]): ReactNode =>
    list.map(({ id, origin, destiny, value }, index) => (
      <ItemList
        key={id}
        position={index + 1}
        origin={origin}
        destiny={destiny}
        value={value}
      />
    ));

  return (
    <>
      <P>Veja nossos preços:</P>

      <Container>
        <ItemList origin="Origem" destiny="Destino" value="$/min" />
        {plans && createList(plans)}
      </Container>
    </>
  );
};

export default List;
