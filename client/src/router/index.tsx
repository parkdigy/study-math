import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { Home } from '@comp';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
