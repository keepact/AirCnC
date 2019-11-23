import React from 'react';

import { Container, HeaderImage } from './styles';

import logo from '../../assets/logo.png';

function Header() {
  return (
    <Container>
      <HeaderImage source={logo} />
    </Container>
  );
}

export default Header;
