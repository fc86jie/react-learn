import { createStore } from 'redux';
// import { createStore } from '@/xredux';
import reducers from './reducers/index';

const store = createStore(reducers);

export default store;
