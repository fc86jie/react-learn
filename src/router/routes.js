import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import A from '../pages/routers/A';

const aRoutes = [
  {
    path: '/a',
    component: () => <Navigate to="/a/a1"></Navigate>,
  },
  {
    path: '/a/a1',
    component: lazy(() => import(/*webpackChunkName:"aChild"*/ '../pages/routers/A1')),
  },
  {
    path: '/a/a2',
    component: lazy(() => import(/*webpackChunkName:"aChild"*/ '../pages/routers/A2')),
  },
  {
    path: '/a/a3',
    component: lazy(() => import(/*webpackChunkName:"aChild"*/ '../pages/routers/A3')),
  },
];

const routes = [
  {
    path: '/',
    component: () => <Navigate to="/a"></Navigate>,
  },
  {
    path: '/a',
    name: 'A',
    component: A,
    children: aRoutes,
  },
  {
    path: '/b',
    name: 'B',
    component: lazy(() => import('../pages/routers/B')),
  },
  {
    path: '/c/:id?/:name?',
    name: 'C',
    component: lazy(() => import('../pages/routers/C')),
  },
  {
    path: '*',
    component: () => (
      <Navigate
        to={{
          pathname: '/a',
          search: '?from=404',
        }}></Navigate>
    ),
  },
];

export default routes;
