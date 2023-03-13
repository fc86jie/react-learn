/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-13 22:22:39
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 23:19:16
 * @FilePath: \src\components\count\GrandSon.jsx
 * @Description:
 */

import { Button, Divider } from 'antd';
import React, { useContext } from 'react';
import CountContext from './CountContext';
import SonContext from './SonContext';

// 类组件
// class GrandSon extends React.Component {
//   static contextType = CountContext;
//   render() {
//     return (
//       <>
//         <p>GrandSon组件：{this.context.count}</p>
//         <Button type="primary" onClick={this.context.handleClick}>
//           GrandSon组件+
//         </Button>
//       </>
//     );
//   }
// }

// 函数式组件
const GrandSon = () => {
  // 使用useContext方式
  let { count, handleClick } = useContext(CountContext);
  let { num, changeNum } = useContext(SonContext);
  return (
    <>
      <p>GrandSon组件：{count}</p>
      <Button type="primary" onClick={handleClick}>
        GrandSon组件+
      </Button>
      <Divider></Divider>
      <p>GrandSon中Son组件：{num}</p>
      <Button type="primary" onClick={changeNum}>
        GrandSon中Son组件+
      </Button>
    </>
  );
  // 使用Consumer方式
  // return (
  //   <CountContext.Consumer>
  //     {({ count, handleClick }) => (
  //       <SonContext.Consumer>
  //         {({ num, changeNum }) => {
  //           return (
  //             <>
  //               <p>GrandSon组件：{count}</p>
  //               <Button type="primary" onClick={handleClick}>
  //                 GrandSon组件+
  //               </Button>
  //               <Divider></Divider>
  //               <p>GrandSon中Son组件：{num}</p>
  //               <Button type="primary" onClick={changeNum}>
  //                 GrandSon中Son组件+
  //               </Button>
  //             </>
  //           );
  //         }}
  //       </SonContext.Consumer>
  //     )}
  //   </CountContext.Consumer>
  // );
};

export default GrandSon;
