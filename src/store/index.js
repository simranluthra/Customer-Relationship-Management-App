import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { watcherSaga } from "./rootSaga";
import customerSlice from "./customer/reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    customer: customerSlice
  },
  middleware: middlewares,
});

sagaMiddleware.run(watcherSaga);

export default store;
