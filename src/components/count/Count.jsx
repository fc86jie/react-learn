/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-13 22:21:14
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 22:41:28
 * @FilePath: \src\components\count\Count.jsx
 * @Description:
 */

import { Button, Divider } from 'antd';
import React, { useState } from 'react';
import CountContext from './CountContext';
import Son from './Son';

// 类组件
// class Count extends React.Component {
//   state = {
//     count: 1,
//   };

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <CountContext.Provider
//         value={{
//           count: this.state.count,
//           handleClick: this.handleClick,
//         }}>
//         <p>父组件：{this.state.count}</p>
//         <Button type="primary" onClick={this.handleClick}>
//           父组件+
//         </Button>
//         <Divider></Divider>
//         <Son count={this.state.count} handleClick={this.handleClick}></Son>
//       </CountContext.Provider>
//     );
//   }
// }

// 函数式组件
const Count = () => {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        handleClick,
      }}>
      <p>父组件：{count}</p>
      <Button type="primary" onClick={handleClick}>
        父组件+
      </Button>
      <Divider></Divider>
      <Son count={count} handleClick={handleClick}></Son>
    </CountContext.Provider>
  );
};

export default Count;
