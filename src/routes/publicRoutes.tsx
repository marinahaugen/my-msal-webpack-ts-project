import { Route, Routes } from 'react-router-dom';

import React, { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const AboutMe = lazy(() => import('../pages/AboutMe'));
const ValueProposition = lazy(() => import('../pages/ValueProposition'));

const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/value-proposition" element={<ValueProposition />} />
  </>
);

export default publicRoutes;
