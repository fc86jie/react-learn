/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-09 22:52:36
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-10 21:42:58
 * @FilePath: \src\jsxHandle.js
 * @Description:
 */

// 遍历对象，for...in存在弊端（1. 会查找原型链上的，性能差；2.遍历可迭代非symbol类型）
const each = (obj, fn) => {
  if (obj == null || typeof obj !== 'object') {
    throw new TypeError('obj is not object');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('fn is not function');
  }

  let keys = Reflect.ownKeys(obj);
  keys.forEach(key => {
    fn(obj[key], key);
  });
};

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

// render方法，虚拟DOM-》真实DOM
export function render(virtualDOM, container) {
  let { type, props } = virtualDOM;
  if (typeof type === 'string') {
    let ele = document.createElement(type);
    each(props, (value, key) => {
      if (key === 'className') {
        ele.className = value;
        return;
      }

      if (key === 'style') {
        each(value, (val, attr) => {
          ele.style[attr] = val;
        });
        return;
      }

      if (key === 'children') {
        let children = value;

        // 不是数组转换成数组（单文本节点是字符串）
        if (!Array.isArray(children)) {
          children = [children];
        }
        children.forEach(child => {
          // 文本节点
          if (/^(string|number)$/.test(typeof child)) {
            ele.appendChild(document.createTextNode(child));
            return;
          }
          // 递归
          render(child, ele);
        });
        return;
      }

      ele.setAttribute(key, value);
    });

    container.appendChild(ele);
  }
}
