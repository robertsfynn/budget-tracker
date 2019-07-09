import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Normalize } from 'styled-normalize';
import * as serviceWorker from './serviceWorker';
import { Firebase, FirebaseContext } from 'components';
import { createGlobalStyle } from 'styled-components';
import GTWalsheimPro from './assets/fonts/GT-Walsheim-Pro-Regular.OTF';
import GTWalsheimProBold from './assets/fonts/GT-Walsheim-Pro-Bold.OTF';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: GTWalsheimPro;
    src: url('${GTWalsheimPro}') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: GTWalsheimPro;
    src: url('${GTWalsheimProBold}') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  html, body, #root, .App {
    height: 100%;
    background-color: #fcfcfc;
  } 
  textarea,
  input,
  button {
    appearance: none;
    border-radius: 0;
  }
`;

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <GlobalStyles />
    <Normalize />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
