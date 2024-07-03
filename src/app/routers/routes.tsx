import React from 'react';
import DetailsPage from '../../pages/details/DetailsPage.js';
import HomePage from '../../pages/home/HomePage.js';

export const privateRoutes = [
  { path: '/', element: <HomePage />, exact: true },
  { path: '/details', element: <DetailsPage />, exact: true },
];

export const publicRoutes = [
  // { path: '/login', element: <Login />, exact: true },
];

//* Redirect
/* <Route path="*" element={<Navigate to="/posts" replace />} /> */
