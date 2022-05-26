import { useSelector } from 'react-redux';

import { getLanguage } from 'containers/App/selectors';

import { t } from './t';

export const useTranslations = () => {
  useSelector(getLanguage); // update on language change
  return t;
};
