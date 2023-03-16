/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-16 16:41:56
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-16 21:24:53
 * @FilePath: \src\xredux.js
 * @Description:
 */

export const createStore = reduce => {
  let state;
  let listeners = new Set();

  if (typeof reduce !== 'function') {
    throw new Error('reduce must be function');
  }

  const getState = () => {
    return state;
  };

  const dispatch = action => {
    if (Object.prototype.toString(action) !== '[object Object]') {
      throw new Error('action must be plainObject');
    }
    state = reduce(state, action);

    listeners.forEach(fn => fn());
  };

  const subscribe = fn => {
    if (typeof fn !== 'function') {
      throw new Error('fn must be function');
    }
    listeners.add(fn);

    return () => {
      listeners.delete(fn);
    };
  };

  dispatch({
    type: Symbol(),
  });

  return {
    getState,
    dispatch,
    subscribe,
  };
};
