import { SET_LANGUAGE, SET_NAME } from './constants';

export type InitialState = typeof initialState;
export type Language = 'pl' | 'en';

export const initialState: { name: string; language: Language } = {
  name: 'tomek',
  language: 'pl',
};

type Action = {
  type: string;
  name?: string;
  language?: Language;
};

export const appReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name!,
      };

    case SET_LANGUAGE: {
      return {
        ...state,
        language: action.language!,
      };
    }

    default:
      return state;
  }
};
