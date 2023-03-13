/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-13 20:53:29
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 21:04:38
 * @FilePath: \src\components\UsePartialStateDemo.jsx
 * @Description:
 */
import { Button, Divider, Row, Tag } from 'antd';
import React, { useMemo, useState } from 'react';

// 自定义hook，支持局部更新
const usePartialState = initialState => {
  let [state, setState] = useState(initialState);
  const setPartialState = partialState => {
    setState({
      ...state,
      ...partialState,
    });
  };
  return [state, setPartialState];
};

const UsePartialStateDemo = () => {
  let [state, setPartialState] = usePartialState({
    num1: 0,
    num2: 0,
  });

  const ratio = useMemo(() => {
    let sum = state.num1 + state.num2;
    return sum > 0 ? (state.num1 * 100) / sum + '%' : '-';
  }, [state.num1, state.num2]);

  const handler = type => {
    if (type === 'add') {
      setPartialState({
        num1: state.num1 + 1,
      });
    } else {
      setPartialState({
        num2: state.num2 + 1,
      });
    }
  };

  return (
    <Row justify="center" align="middle">
      <h1>自定义hook</h1>
      <Divider></Divider>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {state.num1}
      </Tag>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {state.num2}
      </Tag>
      <Tag color="magenta" style={{ fontSize: '20px' }}>
        {ratio}
      </Tag>
      <Divider></Divider>
      <Button type="primary" onClick={() => handler('add')}>
        同意
      </Button>
      <Button type="primary" onClick={handler.bind(null, 'del')}>
        反对
      </Button>
    </Row>
  );
};

export default UsePartialStateDemo;
