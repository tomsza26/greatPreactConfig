import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from 'containers/App/reducer';

import { REDUCER_APP_KEY } from './constants';

const createStore = (initialState = {}) => {
  let composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const createdStore = legacy_createStore(
    combineReducers({
      [REDUCER_APP_KEY]: appReducer,
    }),
    initialState,
    composeEnhancers(...enhancers),
  );

  return createdStore;
};

export const store = createStore();
