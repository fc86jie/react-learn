/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-17 21:19:04
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-18 21:05:46
 * @FilePath: \src\store\actions\vote.js
 * @Description:
 */

import { VOTE_OP, VOTE_SUP } from '../action_types';

// 模拟异步
const delay = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};

const voteAction = {
  support(payload) {
    return {
      type: VOTE_SUP,
      ...payload,
    };
  },
  //   // 使用redux-thunk中间件处理异步，需要手动派发一次
  // support(payload) {
  //   return async dispatch => {
  //     await delay();
  //     dispatch({
  //       type: VOTE_SUP,
  //       ...payload,
  //     });
  //   };
  // },
  // 使用redux-promise中间件处理异步
  async supportAsync(payload) {
    await delay(2000);
    return {
      type: VOTE_SUP,
      ...payload,
    };
  },
  unSupport(payload) {
    return {
      type: VOTE_OP,
      ...payload,
    };
  },
};

export default voteAction;
