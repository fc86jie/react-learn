import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import voteReducer from './features/vote/voteSlice.js';

const store = configureStore({
  reducer: {
    vote: voteReducer,
  },
  middleware: [reduxLogger, reduxThunk, reduxPromise],
});

export default store;
