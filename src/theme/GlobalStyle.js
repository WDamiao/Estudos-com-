import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: #202020;
  }

  input {
    padding: 1rem;
    background-color: white;
  }
`;
 
export default GlobalStyle;