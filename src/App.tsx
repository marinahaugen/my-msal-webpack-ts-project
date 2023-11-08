import AppRoutes from './routes';

import React from 'react';

import { PageLayout } from './components/PageLayout';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './auth/authConfig';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuspenseWrapper from './components/SuspenseWrapper';
import partlyProtectedRoutes from './routes/partlyProtectedRoutes';
import fullyProtectedRoutes from './routes/fullyProtectedRoutes';
import publicRoutes from './routes/publicRoutes';

export const msalInstance = new PublicClientApplication(msalConfig);

export default function App() {
  const AppWithAuthentication = () => (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <Routes>
          <Route element={<SuspenseWrapper />}>{partlyProtectedRoutes}</Route>
          <Route element={<SuspenseWrapper />}>{fullyProtectedRoutes}</Route>
          <Route
            path="*"
            element={<div>Autentication: Sorry, not found!</div>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </MsalProvider>
  );

  const AppPublic = () => (
    <BrowserRouter>
      <Routes>
        <Route element={<SuspenseWrapper />}>{publicRoutes}</Route>
        <Route path="*" element={<div>Open: Sorry, not found!</div>}></Route>
      </Routes>
    </BrowserRouter>
  );

  const internalUser = true;

  return (
    <PageLayout>
      {internalUser ? <AppWithAuthentication /> : <AppPublic />}
    </PageLayout>
  );
}
