/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-16 11:58:41
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-25 13:57:25
 * @FilePath: \src\components\voteToolKit\Vote.jsx
 * @Description:
 */

import { useSelector } from 'react-redux';
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

const Vote = props => {
  const { supNum, opNum } = useSelector(state => state.vote);

  return (
    <VoteBox>
      <header className="header">
        <h2 className="title">投票（redux-toolkit）</h2>
        <span className="num">{supNum + opNum}</span>
      </header>
      <Main></Main>
      <Footer></Footer>
    </VoteBox>
  );
};

// export default Vote;
export default Vote;
