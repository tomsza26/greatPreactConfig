import { SET_NAME } from './constants';

export const setName = (name: string) => ({
  type: SET_NAME,
  name,
});
