import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MsalProvider } from '@azure/msal-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './auth/authConfig';

export const msalInstance = new PublicClientApplication(msalConfig);

/**
 * We recommend wrapping most or all of your components in the MsalProvider component.
 * It's best to render the MsalProvider as close to the root as possible.
 */
ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

/*
const AppWithAuthentication = () => (
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>
);

const AppWithoutAuthentication = () => <App />;

const internalUser = localStorage.getItem('internalUser');

const AppToRender = internalUser ? (
  <AppWithAuthentication />
) : (
  <AppWithoutAuthentication />
);

ReactDOM.render(AppToRender, document.getElementById('root'));
*/
