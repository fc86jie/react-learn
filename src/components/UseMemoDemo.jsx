/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-13 17:39:19
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 20:27:06
 * @FilePath: \src\components\UseMemoDemo.jsx
 * @Description:
 */

import { Button, Divider, Row, Tag } from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

// 类组件
class Child1 extends React.PureComponent {
  render() {
    console.log('child1 render');
    return <div>Child1</div>;
  }
}

// 函数式组件
const Child2 = React.memo(() => {
  console.log('child2 render');
  return <div>Child2</div>;
});

const UseMemoDemo = props => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [num3, setNum3] = useState(0);

  const ratio = useMemo(() => {
    console.log('--------xxx----');
    let sum = num1 + num2;
    return sum > 0 ? (num1 * 100) / sum + '%' : '-';
  }, [num1, num2]);

  const handler1 = () => {
    setNum1(num1 + 1);
  };

  const handler2 = () => {
    setNum2(num2 + 1);
  };

  const handler3 = () => {
    setNum3(num3 + 1);
  };

  // const handler = () => {
  //   console.log('Parent handler');
  // };

  const handler = useCallback(() => {
    console.log('Parent handler');
  }, []);

  useEffect(() => {});

  return (
    <Row justify="center" align="middle">
      <h1>useMemo</h1>
      <Child1 handler={handler}></Child1>
      <Child2 handler={handler}></Child2>
      <Divider></Divider>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {num1}
      </Tag>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {num2}
      </Tag>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {ratio}
      </Tag>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {num3}
      </Tag>
      <Divider></Divider>
      <Button type="primary" onClick={handler1}>
        同意
      </Button>
      <Button type="primary" onClick={handler2}>
        反对
      </Button>
      <Button onClick={handler3}>其他</Button>
    </Row>
  );
};

export default UseMemoDemo;
