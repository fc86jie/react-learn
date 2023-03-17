/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-17 21:07:15
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-17 22:03:12
 * @FilePath: \src\store\reducers\index.js
 * @Description:
 */

// import { combineReducers } from 'redux';
import { combineReducers } from '@/source/xCombineReducers';
import voteReducer from './vote';

const reducers = combineReducers({
  vote: voteReducer,
});

export default reducers;
