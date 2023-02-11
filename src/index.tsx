// @ts-nocheck
// TODO - type

import { setup } from 'goober';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'containers/App';
import { store } from 'reduxConfig';
import { Router } from 'utils/Router';

setup(createElement);

const root = createRoot(document.getElementById('app')!);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
