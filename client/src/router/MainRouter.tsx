import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { Dev, Home } from '@comp';
import { config } from '@common';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      {config.isLocal && <Route path='/dev/controls' element={<Dev />} />}

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default MainRouter;
