import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';

import { App } from "containers/App";
// import Router from 'utils/Router';
// import store from 'utils/store';

const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(
  // <Provider store={store}>
  // <Router>
  <App />,
  // </Router>
  // </Provider>,
  MOUNT_NODE
);
