/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-30 16:45:40
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-30 17:32:57
 * @FilePath: \src\router\index.js
 * @Description: react-route-dom v6
 */

import { Suspense } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import routes from './routes';

/**
 * 统一的渲染组件，在这里可以做权限验证、登录校验、传递props等
 */
const Element = props => {
  let { component: Component } = props;
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return <Component navigate={navigate} location={location} params={params} usp={usp} />;
};

/**
 * 递归创建路由
 * @param {*} routes
 * @returns
 */
const createRoute = routes => {
  return (
    <>
      {routes.map((item, index) => {
        let { path } = item;
        return (
          <Route key={index} path={path} element={<Element {...item} />}>
            {Array.isArray(item.children) ? createRoute(item.children) : null}
          </Route>
        );
      })}
    </>
  );
};

export default function RouterView() {
  return (
    <Suspense fallback={<>正在加载中...</>}>
      <Routes>{createRoute(routes)}</Routes>
    </Suspense>
  );
}

// 类组件可以通过属性获取到
export const withRouter = Component => {
  return props => {
    const navigate = useNavigate(),
      location = useLocation(),
      params = useParams(),
      [usp] = useSearchParams();
    return <Component {...props} navigate={navigate} location={location} params={params} usp={usp} />;
  };
};
