import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'containers/App/reducer';

import { REDUCER_APP_KEY } from './constants';

export const store = configureStore({
  reducer: {
    [REDUCER_APP_KEY]: appReducer,
  },
  devTools: true,
});
