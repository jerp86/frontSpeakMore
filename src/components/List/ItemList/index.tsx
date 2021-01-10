import React, { LiHTMLAttributes } from 'react';
import { Container } from './styles';

export type ItemListProps = LiHTMLAttributes<HTMLLIElement> & {
  position?: number;
  id?: string;
  origin: 11 | 16 | 17 | 18 | 'Origem';
  destiny: 11 | 16 | 17 | 18 | 'Destino';
  value: number | '$/min';
};

const ItemList: React.FC<ItemListProps> = ({
  position,
  origin,
  destiny,
  value,
}) => {
  return (
    <Container>
      <span>{position}</span>
      <span>{origin}</span>
      <span>{destiny}</span>
      <span>{value}</span>
    </Container>
  );
};

export default ItemList;
