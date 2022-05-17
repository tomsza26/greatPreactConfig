import { SET_NAME } from './constants';

export type InitialState = typeof initialState;

export const initialState = {
  name: 'tomek',
};

type Action = {
  type: string;
  name?: string;
};

export const appReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name!,
      };

    default:
      return state;
  }
};
