/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-29 10:27:49
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-29 12:38:46
 * @FilePath: \src\pages\routers\B.jsx
 * @Description:
 */

import qs from 'qs';
import { useNavigate } from 'react-router-dom';

const B = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate('/c');
    // 1. url search传参
    // navigate(`/c?${qs.stringify({ name: 'zs', id: 18 })}`);
    // navigate({
    //   pathname: '/c',
    //   search: qs.stringify({ name: 'zs', id: 18 }),
    // });
    // 2. url path传参
    // navigate('/c/100/zs');
    // 3. 隐式传参
    navigate('/c', {
      // 替换记录
      // replace: true,
      state: {
        id: 1000,
        name: 'ls',
      },
    });
  };
  return (
    <>
      <h3>这是B组件</h3>
      <button onClick={handleClick}>去往C组件</button>
    </>
  );
};

export default B;
