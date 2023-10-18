import { Route } from 'react-router-dom';
import Admin from '../pages/Admin';
import React from 'react';

const fullyProtectedRoutes = (
  <>
    <Route path="/admin" element={<Admin />} />
  </>
);

export default fullyProtectedRoutes;
