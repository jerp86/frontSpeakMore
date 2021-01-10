import React from 'react';
import Button from '../Button';

import { Second, ContentForm } from './styles';

const Form: React.FC = () => {
  return (
    <Second>
      <ContentForm>
        <label htmlFor="origin">
          Origem:
          <select id="origin" required>
            <option hidden>Escolha a Origem</option>
          </select>
        </label>

        <label htmlFor="destiny">
          Destino:
          <select id="destiny" required>
            <option hidden>Escolha o Destino</option>
          </select>
        </label>

        <label htmlFor="plan">
          Plano:
          <select id="plan" required>
            <option hidden>Escolha o Plano</option>
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

      <Button>Calcular</Button>
    </Second>
  );
};

export default Form;
