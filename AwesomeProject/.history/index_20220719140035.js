/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


const persistor = getPersistor();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
