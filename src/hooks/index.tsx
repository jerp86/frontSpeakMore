import React from 'react';

import { CalculateProvider } from './calculate';

const AppProvider: React.FC = ({ children }) => (
  <CalculateProvider>{children}</CalculateProvider>
);

export default AppProvider;
