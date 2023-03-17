/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-17 21:07:27
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-17 21:08:34
 * @FilePath: \src\reducers\vote.js
 * @Description:
 */

import { clone } from 'lodash-es';

let initState = {
  supNum: 10,
  opNum: 5,
};

let voteReducer = (state = initState, action) => {
  state = clone(state);
  switch (action.type) {
    case 'VOTE_SUP':
      state.supNum++;
      break;
    case 'VOTE_OP':
      state.opNum++;
      break;
    default:
      break;
  }
  return state;
};

export default voteReducer;
