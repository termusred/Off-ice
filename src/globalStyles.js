import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color:  ${({theme}) => theme.BodyColor};
  }
  *{
    font-family: 'Courier New', Courier, monospace;
  }
  a{
    text-decoration: none;
    color: black;
  }
  ::-webkit-scrollbar
  {
    width: 12px;
    background-color:  ${({theme}) => theme.BodyColor}
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: burlywood;
  }

`;
 
export default GlobalStyle;