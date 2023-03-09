/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-09 22:52:36
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-09 23:06:16
 * @FilePath: \src\jsxHandle.js
 * @Description:
 */

// 创建虚拟DOM，模拟React.createElement方法
export function createElement(ele, props, ...children) {
  const virtualDom = {
    $$typeof: Symbol('react.element'),
    key: null,
    ref: null,
    type: null,
    props: {},
  };

  virtualDom.type = ele;

  if (props !== null) {
    virtualDom.props = { ...props };
  }

  let len = children.length;
  if (len === 1) {
    virtualDom.props.children = children[0];
  } else if (len > 1) {
    virtualDom.props.children = [...children];
  }

  return virtualDom;
}
