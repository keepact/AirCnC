import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;
}

body {
  background: #000 url(${background}) no-repeat;
  background-size: cover;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 14px;
}

button[class='btn'] {
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #e14f50;
  }
}
`;
