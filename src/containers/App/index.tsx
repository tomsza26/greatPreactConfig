import { useSelector } from 'react-redux';

import { getName } from './selectors';

export const App = () => {
  const name = useSelector(getName);

  return <div>{name}</div>;
};
