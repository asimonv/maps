import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const middleware = applyMiddleware(thunk, createLogger());
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, middleware);
export const persistor = persistStore(store);
