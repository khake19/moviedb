import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth'],
  blackList: ['home', 'watchlist'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)),
);
const persistor = persistStore(store);

export {store, persistor};
