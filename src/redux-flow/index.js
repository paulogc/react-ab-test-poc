/* global process */
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import requestUtil from 'utils/helpers/request';
import logicList from './logics';
import reducers from './reducers';

function configureStore() {
  const injectedHelpers = { requestUtil };
  const logicMiddleware = createLogicMiddleware(logicList, injectedHelpers);

  let store = {};
  if (process.env.NODE_ENV === 'production') {
    store = createStore(
      reducers,
      applyMiddleware(logicMiddleware),
    );
  } else {
    store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(logicMiddleware)),
    );
  }

  return store;
}

export default configureStore();
