import { store } from 'reduxConfig';

export const REDUCER_APP_KEY = 'app';

export type Store = ReturnType<typeof store.getState>;
