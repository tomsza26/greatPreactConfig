import { createBrowserHistory } from 'history';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { Router as ReactRouter } from 'react-router';

const history = createBrowserHistory();

export const Router = ({ children }: { children: ReactNode }) => {
  const historyRef = useRef(history);

  const [state, setState] = useState({
    location: historyRef.current.location,
  });

  useLayoutEffect(() => historyRef.current.listen(setState), [historyRef.current]);

  return (
    <ReactRouter location={state.location} navigator={history}>
      {children}
    </ReactRouter>
  );
};
