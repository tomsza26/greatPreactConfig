import { createSelector } from 'reselect';

import { REDUCER_APP_KEY, Store } from 'reduxConfig/constants';

import { InitialState, initialState } from './reducer';

const getComponentState = (state: Store): InitialState => state[REDUCER_APP_KEY] || initialState;

export const getName = createSelector([getComponentState], (state) => state.name);

export const getLanguage = createSelector([getComponentState], (state) => state.language);
