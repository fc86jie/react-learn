/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-29 10:27:44
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-29 11:12:05
 * @FilePath: \src\pages\routers\A.jsx
 * @Description:
 */

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const A = () => {
  return (
    <>
      <h3>这是A组件</h3>
      <NavLink to="/a/a1">a1</NavLink>
      <NavLink to="/a/a2">a2</NavLink>
      <NavLink to="/a/a3">a3</NavLink>
      <Outlet></Outlet>
    </>
  );
};

export default A;
