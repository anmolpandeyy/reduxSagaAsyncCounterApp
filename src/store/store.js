import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import index from "../reducer/index";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleWare = createSagaMiddleWare();

export default (store = createStore(
  index,
  applyMiddleware(logger, sagaMiddleWare)
));

sagaMiddleWare.run(rootSaga);
