import React, { ReactNode, useEffect, useState } from 'react';

import { Container, P } from './styles';

import ItemList, { ItemListProps } from './ItemList';
import api from '../../services/api';

const List: React.FC = () => {
  const [plans, setPlans] = useState<ItemListProps[]>([]);

  useEffect(() => {
    api.get(`/plans`).then(response => {
      setPlans(response.data.map((res: ItemListProps) => res));
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
