import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${theme.colors.main};
    min-height: 100vh;
  }
  
  body, input, button  {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
  }
`