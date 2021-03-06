/* global require module document*/
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();
const reactRoot = document.getElementById('react-root');

let render = () => {
  const App = require('./components/Home.js').default; // eslint-disable-line global-require

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    reactRoot
  );
};

if (module.hot) {
  const renderApp = render;
  const renderError = error => {
    const RedBox = require('redbox-react').default; // eslint-disable-line global-require

    ReactDOM.render(<RedBox error={error} />, reactRoot);
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept('./components/Home.js', () => {
    render();
  });
}

render();
