import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyleGlobal from "./StyleGlobal";
import {DataProvider} from './ContextFile/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyleGlobal>
    <DataProvider>
      <App />
    </DataProvider>
  </StyleGlobal>
);

reportWebVitals();
