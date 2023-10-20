import React, { Suspense } from 'react';

import CenteredProgressIndicator from './components/CenteredProgressIndicator';
import { Outlet } from 'react-router-dom';

function SuspenseWrapper(): JSX.Element {
  return (
    <Suspense fallback={<CenteredProgressIndicator />}>
      <Outlet />
    </Suspense>
  );
}

export default SuspenseWrapper;
