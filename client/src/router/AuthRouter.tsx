import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { AuthSignIn, AuthSignUp } from '@comp';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/signin' element={<AuthSignIn />} />
      <Route path='/signup' element={<AuthSignUp />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AuthRouter;
