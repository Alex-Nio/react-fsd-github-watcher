import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

interface AppRoute {
  path: string;
  element: React.ReactNode;
}

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {privateRoutes.map((route: AppRoute) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {publicRoutes.map((route: AppRoute) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
