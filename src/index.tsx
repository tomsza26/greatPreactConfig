// @ts-nocheck
// TODO - type

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'reduxConfig';

import { App } from 'containers/App';
// import Router from 'utils/Router';
// import store from 'utils/store';

const root = createRoot(document.getElementById('app')!);

root.render(
  <Provider store={store}>
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </Provider>,
);
