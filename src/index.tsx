/* eslint-disable import/no-import-module-exports */
import './types/global';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from './components/Router';
import App from './App';
import createStore from './store/store';
import createServices from './utils/services/services';
import setupInterceptors from './utils/services/SetupInterceptors/service';

const history = createBrowserHistory();

declare global {
  interface Window {
    REDUX_DATA: {
      [key: string]: unknown;
    };
  }
}

const store = createStore({
  history,
  services: createServices(),
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
setupInterceptors(store);

if (module.hot) {
  module.hot.accept();
}
