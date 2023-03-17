/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-16 11:58:11
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-16 12:47:33
 * @FilePath: \src\components\vote\Main.jsx
 * @Description:
 */
import VoteContext from '@/components/vote/voteContext';
import { useContext, useEffect, useState } from 'react';

const Main = () => {
  const { store } = useContext(VoteContext);
  const { supNum, opNum } = store.getState().vote;
  let [_, setNum] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      // 保证每次的值不一样，强制触发更新
      setNum(+new Date());
    });
  }, []);
  return (
    <div className="main">
      <p>支持人数：{supNum}</p>
      <p>反对人数：{opNum}</p>
    </div>
  );
};

export default Main;
