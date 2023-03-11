/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-10 22:24:49
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-11 14:30:06
 * @FilePath: \src\components\Count.jsx
 * @Description:
 */

import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Count(props) {
  // props只读
  let { title, x, children } = props;

  // 把children为空等各种情况处理成统一的
  children = React.Children.toArray(children);
  let headerSlots = [],
    defaultSlots = [],
    footerSlots = [];
  children.forEach(child => {
    let { slot } = child.props;
    if (slot === 'header') {
      headerSlots.push(child);
    } else if (slot === 'footer') {
      footerSlots.push(child);
    } else {
      defaultSlots.push(child);
    }
  });

  let [num, setNum] = useState(0);

  return (
    <>
      {headerSlots}
      {title}----{x}
      <hr />
      {defaultSlots}
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 10)}>按钮+</button>
      {/* 没有数组，单独指定循环次数 */}
      {new Array(5).fill(null).map((_, index) => (
        <p key={index}>{index}</p>
      ))}
      {footerSlots}
    </>
  );
}

// 指定 props 的默认值：
Count.defaultProps = {
  x: 1000,
};

// 对props设置验证规则
Count.propTypes = {
  // 字符串、必填
  title: PropTypes.string.isRequired,
  // 数字
  x: PropTypes.number,
};

export default Count;
