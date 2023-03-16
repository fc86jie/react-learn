import { createStore } from 'redux';
// import { createStore } from '@/xredux';

let initial = {
  supNum: 10,
  opNum: 5,
};

const reducer = (state = initial, action) => {
  state = { ...state };
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

const store = createStore(reducer);

export default store;
