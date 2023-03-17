/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-17 21:42:13
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-17 22:02:23
 * @FilePath: \src\source\xCombineReducers
 * @Description:
 */

export const combineReducers = reducersMap => {
  let keys = Object.keys(reducersMap);
  // 返回一个reduce函数，里面把所有的reduce执行一遍，并返回合并之后的state
  return function (state = {}, action) {
    let nextState = {};
    keys.forEach(key => {
      let reduce = reducersMap[key];
      nextState[key] = reduce(state[key], action);
    });

    return nextState;
  };
};
