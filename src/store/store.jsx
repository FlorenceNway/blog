import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from './combineReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['router'],
// };

export const history = createBrowserHistory();
// const persistedReducer = persistReducer(persistConfig, reducers(history));

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger'); // eslint-disable-line global-require

  const logger = createLogger({
    level: 'log',
    collapsed: true,
    // predicate: (getState, action) => !includes(action.type, '@@redux-form')
  });
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(
  routerMiddleware(history),
  ...middlewares
)(createStore);

// export const store = createStoreWithMiddleware(persistedReducer);
const store = createStoreWithMiddleware(
  reducers(history),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);
// eslint-enable //

export default store;

// export const persistor = persistStore(store);
