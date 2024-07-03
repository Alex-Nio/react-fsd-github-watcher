import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './app/routers/AppRouter';

import './app/styles/scss/main.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
