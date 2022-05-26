import { SET_LANGUAGE, SET_NAME } from './constants';
import { Language } from './reducer';

export const setName = (name: string) => ({
  type: SET_NAME,
  name,
});

export const setLanguage = (language: Language) => ({
  type: SET_LANGUAGE,
  language,
});
