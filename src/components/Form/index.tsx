/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useState } from 'react';

import { Second, ContentForm, ButtonList } from './styles';

import { useCalc } from '../../hooks/calculate';
import api from '../../services/api';

interface IDddProps {
  id: string;
  code: number;
  description: string;
}

interface IProductProps {
  id: string;
  value: number;
  description: string;
}

interface IPlanProps {
  id: string;
  origin: 11 | 16 | 17 | 18;
  destiny: 11 | 16 | 17 | 18;
  value: number;
}

const Form: React.FC = () => {
  const [ddds, setDdds] = useState<IDddProps[]>([]);
  const [originSelected, setOriginSelected] = useState(0);
  const [destinySelected, setDestinySelected] = useState('');
  const [timeSelected, setTimeSelected] = useState(0);
  const [planSelected, setPlanSelected] = useState(0);
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [plans, setPlans] = useState<IPlanProps[]>([]);

  const { comparativo, getPlan } = useCalc();

  useEffect(() => {
    api.get(`/ddds`).then(response => {
      setDdds(response.data.map((res: IDddProps) => res));
    });

    api.get(`/products`).then(response => {
      setProducts(response.data.map((res: IProductProps) => res));
    });

    api.get(`/plans`).then(response => {
      setPlans(response.data.map((res: IPlanProps) => res));
    });
  }, []);

  const getDestiny = useCallback(
    codeFind => {
      const plansFiltered = plans.filter(p => p.origin === Number(codeFind));

      return plansFiltered.map(({ id, destiny, value }) => (
        <option key={id} value={id}>
          {destiny} -&gt; R$ {value}/min
        </option>
      ));
    },
    [plans],
  );

  const clicou = useCallback(async () => {
    const { value } = await getPlan(destinySelected);

    if (!value || !timeSelected || !planSelected) {
      return;
    }

    comparativo(value, timeSelected, planSelected);
  }, [getPlan, destinySelected, comparativo, timeSelected, planSelected]);

  return (
    <>
      <Second>
        <ContentForm>
          <label htmlFor="origin">
            Origem:
            <select
              id="origin"
              onChange={e => setOriginSelected(Number(e.target.value))}
              required
            >
              <option hidden>Escolha a Origem</option>
              {ddds &&
                ddds.map(({ id, code, description }) => (
                  <option key={id} value={code}>
                    {code} -&gt; {description}
                  </option>
                ))}
            </select>
          </label>

          <label htmlFor="destiny">
            Destino:
            <select
              id="destiny"
              onChange={e => setDestinySelected(e.target.value)}
              required
            >
              <option hidden>Escolha o Destino</option>
              {originSelected && getDestiny(originSelected)}
            </select>
          </label>

          <label htmlFor="plan">
            Plano:
            <select
              id="plan"
              value={planSelected}
              onChange={e => setPlanSelected(Number(e.target.value))}
              required
            >
              <option hidden>Escolha o Plano</option>
              {destinySelected &&
                products &&
                products.map(({ id, value, description }) => (
                  <option key={id} value={value}>
                    {description}
                  </option>
                ))}
            </select>
          </label>

          <label htmlFor="origin">
            Tempo:
            <input
              type="number"
              min="1"
              max="250"
              name="time"
              id="time"
              value={timeSelected}
              onChange={e => setTimeSelected(Number(e.target.value))}
              placeholder="Informe os minutos..."
              autoComplete="new-password"
            />
          </label>
        </ContentForm>

        <ButtonList onClick={clicou}>Calcular</ButtonList>
      </Second>
    </>
  );
};

export default Form;
