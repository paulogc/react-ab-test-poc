import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import { CookiesProvider } from 'react-cookie';
import 'styles/global.scss';
import Routes from './containers/Routes';
import store from './redux-flow';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <CookiesProvider>
          <Route index component={Routes} />
        </CookiesProvider>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

export default App;
