import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> om strict anropas min konstruktor två ggr
    <App />
  //</React.StrictMode>
);

