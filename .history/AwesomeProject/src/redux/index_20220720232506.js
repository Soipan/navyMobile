import persistPlugin from "@rematch/persist";
import loadingPlugin from "@rematch/loading"
import { init } from "@rematch/core";
import * as models from "./models";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  whitelist: ["authentication"],
  AsyncStorage,
};

const loadingConfig = {
  global: false,
  models: {
    authentication: true,
    tickets: true,
  },
};

const store = init({
  models: models,
  plugins: [persistPlugin(persistConfig), loadingPlugin(loadingConfig)],
});

export default store;
