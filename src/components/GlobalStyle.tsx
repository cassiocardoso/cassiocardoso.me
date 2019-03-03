import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: linear-gradient(${theme.icyWhite}, ${theme.oakLabGray});
    margin: 0;
    min-height: 100vh;
  }

  a {
    color: ${theme.ceruleanBlue};

    &:hover {
      color: ${theme.lavenderViolet};
    }
  }
`;

export default GlobalStyle;
