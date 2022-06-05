import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import { CharactersContextProvider } from './contexts/CharactersContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersContextProvider>
        <App />
      </CharactersContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

