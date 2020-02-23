import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './store/store';
import Layout from './routes';
import {PersistGate} from 'redux-persist/integration/react';

export default function App(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout />
      </PersistGate>
    </Provider>
  );
}
