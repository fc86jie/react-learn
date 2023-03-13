/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-13 16:54:58
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-13 17:32:56
 * @FilePath: \src\components\UseRefDemo.jsx
 * @Description:
 */

import { Button, Divider, Row, Tag } from 'antd';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

const Child = React.forwardRef((props, ref) => {
  let [text, setText] = useState('Hello World!');
  const submit = () => {};

  useImperativeHandle(ref, () => {
    // 返回的对象暴露给父元素
    return {
      text,
      submit,
    };
  });

  return (
    <div>
      <span>哈哈哈</span>
    </div>
  );
});

const UseRefDemo = props => {
  let tagRef = useRef(null);
  let childRef = useRef(null);
  let [num, setNum] = useState(0);

  const handler = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log('=======', tagRef.current);
    console.log('------------', childRef.current);
  });

  return (
    <Row justify="center" align="middle">
      <h1>useState</h1>
      <Divider></Divider>
      <Tag color="magenta" ref={tagRef} style={{ fontSize: '20px' }}>
        {num}
      </Tag>
      <Divider></Divider>
      <Child ref={childRef} />
      <Button type="primary" onClick={handler}>
        新增
      </Button>
    </Row>
  );
};

export default UseRefDemo;
