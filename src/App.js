import React, { useState } from 'react';
import './App.css';
import { createElement } from './jsxHandle';

let a = createElement(
  React.Fragment,
  null,
  createElement(
    'h2',
    {
      className: 'title',
      style: {
        color: 'red',
      },
    },
    'nias '
  ),
  createElement('div', null, createElement('span', null, '1'), createElement('span', null, '2'))
);
console.log(`🚀 ~ file: App.js:20 ~ a:`, a);

function Count() {
  let [num, setNum] = useState(0);

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 10)}>按钮+</button>
      {/* 没有数组，单独指定循环次数 */}
      {new Array(5).fill(null).map((_, index) => (
        <p key={index}>{index}</p>
      ))}
    </>
  );
}

function App() {
  return <Count></Count>;
}

export default App;
