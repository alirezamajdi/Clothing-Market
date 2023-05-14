import { compose, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import { rootReducer } from "./root-reducer";
const logger = createLogger();

const middleware = [logger];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("current state:", store.getState());

  next(action);

  console.log("next state:", store.getState());
};
