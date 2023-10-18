import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Docs = lazy(() => import('../pages/Docs'));

const partlyProtectedRoutes = (
  <Route path="/docs">
    <Route element={<Docs />} index />
    <Route element={<Docs />} path="internal" />
  </Route>
);

export default partlyProtectedRoutes;
