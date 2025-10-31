import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { Dev, Home } from '@comp';
import { config } from '@common';

export const MainRouter = () => {
  const rootPath = useMemo(() => (env === 'production' ? '/study-math/' : '/'), []);

  const basicRoutes = useMemo(
    () => (
      <>
        <Route path='/' element={<Home />} />

        {config.isLocal && <Route path='/dev/controls' element={<Dev />} />}

        <Route path='*' element={<Navigate to={rootPath} />} />
      </>
    ),
    [rootPath]
  );

  return (
    <Routes>
      <Route path={`${rootPath}*`} element={<Routes>{basicRoutes}</Routes>} />

      <Route path='*' element={<Navigate to={rootPath} />} />
    </Routes>
  );
};

export default MainRouter;
