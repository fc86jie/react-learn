/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-17 21:19:04
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-17 21:28:00
 * @FilePath: \src\store\actions\vote.js
 * @Description:
 */

import { VOTE_OP, VOTE_SUP } from '../action_types';

const voteAction = {
  support(payload) {
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
