import React from 'react';
import {
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Details } from 'pages/details';
import { Home } from 'pages/home';
import { Layout } from 'app/layout';
import { UiPage } from 'pages/ui-page';

//* Redirect
/* <Route path="*" element={<Navigate to="/posts" replace />} /> */

interface IParamsDynamicPath {
  pathname: string;
  params?: { categoryId: string; bookId: string };
}

export const AppRouter = () => {
  const getDynamicPathForRepo = ({
    pathname,
    params,
  }: IParamsDynamicPath): JSX.Element => {
    return <Link to={pathname}></Link>;
  };

  const routers = createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      handle={{ crumb: <Link to="/">Home</Link> }}
    >
      <Route index element={<Home />} />
      <Route path="/ui-page" element={<UiPage />} />
      <Route
        path=":repoId"
        element={<Details />}
        handle={{
          crumb: getDynamicPathForRepo,
        }}
      />
    </Route>
  );

  const router = createBrowserRouter(routers, {});

  return <RouterProvider router={router} />;
};
