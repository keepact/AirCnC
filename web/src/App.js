import React from 'react';

import Routes from './routes';

import logo from './assets/logo.svg';

import GlobalStyles from './styles/global';
import { Container } from './components/Container/index';

function App() {

  return (
    <Container>
      <img src={logo} alt="AirCnc"/>

      <Routes />
      <GlobalStyles />
    </Container>
  );
}

export default App;
