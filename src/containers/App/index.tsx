import { useSelector } from 'react-redux';

import { getName } from './selectors';
import { StyledApp } from './styles';

export const App = () => {
  const name = useSelector(getName);

  return <StyledApp>{name}</StyledApp>;
};
