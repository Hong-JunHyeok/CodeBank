import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "next-redux-logger";
import rootReducer from "./src/modules";

// import createSagaMiddleware from "redux-saga";

const configureStore = () => {
  //   const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares, loggerMiddleware));

  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: false });

export default wrapper;
