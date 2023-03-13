/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-12 22:10:28
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 10:51:36
 * @FilePath: \src\components\UseStateDemo.jsx
 * @Description:
 */
import { Button, Divider, Row, Tag } from 'antd';
import { useState } from 'react';

const UseStateDemo = props => {
  // const [num, setNum] = useState(0);
  // 当初始值依赖props等复杂计算时，为了防止每次更新都重新执行一遍，可放入函数中返回，让其惰性执行
  const [num, setNum] = useState(() => {
    let { x = 1, y = 2 } = props;
    return x + y;
  });
  const handler = () => {
    for (let i = 0; i < 10; i++) {
      setNum(num => num + 1);
    }
  };

  return (
    <Row justify="center" align="middle">
      <h1>useState</h1>
      <Divider></Divider>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {num}
      </Tag>
      <Divider></Divider>
      <Button type="primary" onClick={handler}>
        新增
      </Button>
    </Row>
  );
};

export default UseStateDemo;
