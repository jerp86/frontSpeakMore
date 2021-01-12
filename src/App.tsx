import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles';
import AppProvider from './hooks/index';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  </>
);

export default App;
