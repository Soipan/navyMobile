/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import store from './src/redux';
// import {getPersistor} from '@rematch/persist';
// import {PersistGate} from 'redux-persist/lib/integration/react';
import {name as appName} from './app.json';

// const persistor = getPersistor();

const AppWithRedux = () => (
  <Provider store={store}>
  <App />
</Provider>
)

AppRegistry.registerComponent(appName, () => 
 
);
