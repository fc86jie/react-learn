/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-16 11:58:11
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-25 12:49:27
 * @FilePath: \src\components\voteToolKit\Main.jsx
 * @Description:
 */

import { useSelector } from 'react-redux';

const Main = props => {
  const { supNum, opNum } = useSelector(state => state.vote);

  return (
    <div className="main">
      <p>支持人数：{supNum}</p>
      <p>反对人数：{opNum}</p>
    </div>
  );
};

export default Main;
