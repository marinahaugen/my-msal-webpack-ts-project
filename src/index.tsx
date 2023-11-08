import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * We recommend wrapping most or all of your components in the MsalProvider component.
 * It's best to render the MsalProvider as close to the root as possible.
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
