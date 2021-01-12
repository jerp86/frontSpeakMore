import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface IPlansProps {
  id?: string;
  origin: number;
  destiny: number;
  value: number;
}

interface IResponse {
  speakMore: number;
  competition: number;
}

interface ICalculateContextData {
  data: IResponse | undefined;
  getPlan(id: string): Promise<IPlansProps>;
  comparativo(value: number, time: number, plan: number): void;
}

const CalculateContext = createContext<ICalculateContextData>(
  {} as ICalculateContextData,
);

export const CalculateProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IResponse>();

  const getPlan = useCallback(async (id: string): Promise<IPlansProps> => {
    const response = await api.get(`/plans/${id}`);
    const { origin, destiny, value } = response.data;

    return { origin, destiny, value };
  }, []);

  const comparativo = useCallback(
    (value: number, time: number | undefined, plan: number): void => {
      if (!value || !time || !plan) {
        throw new Error('Please, select and insert values');
      }

      const competition = Number((time * value).toFixed(2));

      if (time <= plan) {
        const speakMore = 0.0;

        return setData({
          speakMore,
          competition,
        });
      }

      const minutos = time - plan;
      const speakMore = Number((minutos * value * 1.1).toFixed(2));

      return setData({
        speakMore,
        competition,
      });
    },
    [],
  );

  return (
    <CalculateContext.Provider value={{ data, getPlan, comparativo }}>
      {children}
    </CalculateContext.Provider>
  );
};

export function useCalc(): ICalculateContextData {
  const context = useContext(CalculateContext);

  if (!context) {
    throw new Error('useCalc must be used within a CalculateProvider');
  }

  return context;
}
