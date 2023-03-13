/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-13 10:52:36
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 12:44:59
 * @FilePath: \src\components\UseEffectDemo.jsx
 * @Description:
 */

import { Button, Divider, Row, Tag } from 'antd';
import { useEffect, useState } from 'react';

const UseEffectDemo = props => {
  console.log('render start');
  let [num, setNum] = useState(0);
  let [x, setX] = useState(0);

  useEffect(() => {
    console.log('render or update');
  });

  useEffect(() => {
    console.log('render');
  }, []);

  useEffect(() => {
    console.log('x change');
  }, [x]);

  useEffect(() => {
    return () => {
      console.log('cleanup');
    };
  });

  const handler = () => {
    setNum(num + 1);
  };

  const handlerX = () => {
    setX(x + 1);
  };

  return (
    <Row justify="center" align="middle">
      <h1>useEffect</h1>
      <Divider></Divider>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        num：{num}
      </Tag>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        x：{x}
      </Tag>
      <Divider></Divider>
      <Button type="primary" onClick={handler}>
        新增
      </Button>
      <Button type="primary" onClick={handlerX}>
        新增x
      </Button>
    </Row>
  );
};

export default UseEffectDemo;
