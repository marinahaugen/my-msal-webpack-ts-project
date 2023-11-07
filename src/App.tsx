import AppRoutes from './routes';

import React from 'react';

import { PageLayout } from './components/PageLayout';

export default function App() {
  return (
    <PageLayout>
      <AppRoutes />
    </PageLayout>
  );
}
