/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-25 12:08:19
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-25 12:31:15
 * @FilePath: \src\storeToolkit\features\vote\todoSlice.js
 * @Description:
 */

import { createSlice } from '@reduxjs/toolkit';

// 模拟异步
const delay = (timer = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};

const voteSlice = createSlice({
  name: 'vote',
  initialState: {
    supNum: 10,
    opNum: 5,
  },
  reducers: {
    support(state, action) {
      state.supNum++;
    },
    unSupport(state, action) {
      state.opNum++;
    },
  },
});

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
export const { support, unSupport } = voteSlice.actions;

// 基于redux-thunk异步派发
export const supportAsync = () => {
  return async dispatch => {
    await delay();
    dispatch(support());
  };
};

// 基于redux-promise异步派发
// export const supportAsync = async () => {
//   await delay();
//   return support();
// };

export default voteSlice.reducer;
