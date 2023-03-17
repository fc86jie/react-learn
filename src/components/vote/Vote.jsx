/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-16 11:58:41
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-17 21:17:02
 * @FilePath: \src\components\vote\vote.jsx
 * @Description:
 */
import VoteContext from '@/components/vote/voteContext';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Main from './Main';

const VoteBox = styled.div`
  width: 300px;
  border: solid 1px #dadada;
  padding: 20px;
  margin: 0 auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Vote = () => {
  const { store } = useContext(VoteContext);
  const { supNum, opNum } = store.getState().vote;
  let [_, setNum] = useState(0);

  useEffect(() => {
    // store订阅更新函数，当store发生变化就触发
    store.subscribe(() => {
      // 保证每次的值不一样，强制触发更新
      setNum(+new Date());
    });
  }, []);

  return (
    <VoteBox>
      <header className="header">
        <h2 className="title">投票</h2>
        <span className="num">{supNum + opNum}</span>
      </header>
      <Main></Main>
      <Footer></Footer>
    </VoteBox>
  );
};

export default Vote;
