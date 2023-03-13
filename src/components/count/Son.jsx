/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-13 22:21:41
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 22:54:05
 * @FilePath: \src\components\count\Son.jsx
 * @Description:
 */
import { Button, Divider } from 'antd';
import React, { useState } from 'react';
import GrandSon from './GrandSon';
import SonContext from './SonContext';

// 类组件
// class Son extends React.Component {
//   render() {
//     return (
//       <>
//         <p>Son组件：{this.props.count}</p>
//         <Button type="primary" onClick={this.props.handleClick}>
//           Son组件+
//         </Button>
//         <Divider></Divider>
//         <GrandSon></GrandSon>
//       </>
//     );
//   }
// }

// 函数式组件
const Son = props => {
  let [num, setNum] = useState(0);

  const changeNum = () => {
    setNum(num + 1);
  };
  return (
    <SonContext.Provider
      value={{
        num,
        changeNum,
      }}>
      <p>Son组件：{props.count}</p>
      <Button type="primary" onClick={props.handleClick}>
        Son组件+
      </Button>
      <p>Son内部的num: {num}</p>
      <Button type="primary" onClick={changeNum}>
        Son内部的+
      </Button>
      <Divider></Divider>
      <GrandSon></GrandSon>
    </SonContext.Provider>
  );
};

export default Son;
