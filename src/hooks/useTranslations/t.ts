import { getLanguage } from 'containers/App/selectors';
import { store } from 'reduxConfig';
import { translations } from 'translations';
import { isFunction } from 'utils/tinyLodash';

export const t = (key: string, params = {}) => {
  const trans = translations?.[getLanguage(store.getState())]?.[key] || `#NO TRANSLATIONS#`;

  //@ts-ignore
  return isFunction(trans) ? trans(params) : trans;
};
