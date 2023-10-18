import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SuspenseWrapper from '../SuspenseWrapper';
import publicRoutes from './publicRoutes';
import partlyProtectedRoutes from './partlyProtectedRoutes';
import fullyProtectedRoutes from './fullyProtectedRoutes';
import React from 'react';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SuspenseWrapper />}>{publicRoutes}</Route>

      <Route element={<SuspenseWrapper />}>{partlyProtectedRoutes}</Route>

      <Route element={<SuspenseWrapper />}>{fullyProtectedRoutes}</Route>

      <Route path="*" element={<div>Sorry, not found!</div>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
