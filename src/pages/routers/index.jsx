/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-29 10:26:13
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-29 12:36:56
 * @FilePath: \src\pages\routers\index.jsx
 * @Description:
 */

import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import A from './A';
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';
import B from './B';
import C from './C';

const Wrap = styled.nav`
   {
    a {
      margin: 0 20px;
      &.pending {
        color: orange;
      }
      &.active {
        color: red;
      }
    }
  }
`;

const RouterDemo = () => {
  return (
    <>
      <Wrap>
        <NavLink to="/a" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          A
        </NavLink>
        <NavLink to="/b" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          B
        </NavLink>
        <NavLink to="/c" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
          C
        </NavLink>
      </Wrap>
      <Routes>
        <Route path="/" element={<Navigate to="/a"></Navigate>}></Route>
        <Route path="/a" element={<A></A>}>
          {/* 此处是二级路由，会被渲染到A组件的Outlet组件中 */}
          <Route path="/a" element={<Navigate to="/a/a1"></Navigate>}></Route>
          <Route path="/a/a1" element={<A1></A1>}></Route>
          <Route path="/a/a2" element={<A2></A2>}></Route>
          <Route path="/a/a3" element={<A3></A3>}></Route>
          <Route
            path="*"
            element={
              <Navigate
                to={{
                  pathname: '/a/a1',
                  search: '?from=404',
                }}></Navigate>
            }></Route>
        </Route>
        <Route path="/b" element={<B></B>}></Route>
        <Route path="/c/:id?/:name?" element={<C></C>}></Route>
        <Route
          path="*"
          element={
            <Navigate
              to={{
                pathname: '/a',
                search: '?from=404',
              }}></Navigate>
          }></Route>
      </Routes>
    </>
  );
};

export default RouterDemo;
