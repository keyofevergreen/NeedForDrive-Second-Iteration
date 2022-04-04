/* eslint-disable import/no-import-module-exports */
import './types/global';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from './components/Router';
import App from './App';
import createStore from './store';
import createServices from './utils/services/services';

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
  services: createServices(fetch),
});

render(
  <Provider store={store}>
    <Router
      history={history}
      basename={process.env.NODE_ENV === 'production' ? '/NeedForDrive-Second-Iteration' : '/'}
    >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
