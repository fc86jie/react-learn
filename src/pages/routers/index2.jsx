/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-29 10:26:13
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-29 21:32:24
 * @FilePath: \src\pages\routers\index2.jsx
 * @Description:
 */

import RouterView from '@/router';
import React from 'react';
import { Navigate, NavLink, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import styled from 'styled-components';

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
      <RouterView></RouterView>
    </>
  );
};

export default RouterDemo;
