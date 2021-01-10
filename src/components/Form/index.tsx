import React, { useCallback, useEffect, useState } from 'react';

import { Second, ContentForm, ButtonList } from './styles';

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
  const [originSelected, setOriginSelected] = useState<number | undefined>();
  const [destinySelected, setDestinySelected] = useState<number | undefined>();
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [plans, setPlans] = useState<IPlanProps[]>([]);

  useEffect(() => {
    const url = 'http:////192.168.15.13:3334';

    fetch(`${url}/ddds`)
      .then(resp => resp.json())
      .then(data => {
        setDdds(data.map((res: IDddProps) => res));
      });

    fetch(`${url}/products`)
      .then(resp => resp.json())
      .then(data => {
        setProducts(data.map((res: IProductProps) => res));
      });

    fetch(`${url}/plans`)
      .then(resp => resp.json())
      .then(data => {
        setPlans(data.map((res: IPlanProps) => res));
      });
  }, []);

  const getDestiny = useCallback(
    codeFind => {
      const plansFiltered = plans.filter(p => p.origin === Number(codeFind));

      return plansFiltered.map(({ id, destiny, value }) => (
        <option key={id} value={destiny}>
          {destiny} -&gt; R$ {value}/min
        </option>
      ));
    },
    [plans],
  );

  const setOrigin = useCallback((event: any): void => {
    setOriginSelected(event.target.value);
  }, []);

  const setDestiny = useCallback((event: any): void => {
    setDestinySelected(event.target.value);
  }, []);

  return (
    <Second>
      <ContentForm>
        <label htmlFor="origin">
          Origem:
          <select id="origin" onChange={setOrigin} required>
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
          <select id="destiny" onChange={setDestiny} required>
            <option hidden>Escolha o Destino</option>
            {originSelected && getDestiny(originSelected)}
          </select>
        </label>

        <label htmlFor="plan">
          Plano:
          <select id="plan" required>
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
            name="tempo"
            id="tempo"
            placeholder="Informe os minutos..."
            autoComplete="new-password"
          />
        </label>
      </ContentForm>

      <ButtonList>Calcular</ButtonList>
    </Second>
  );
};

export default Form;
