import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import index from "../reducer/index";
export default (store = createStore(index, applyMiddleware(logger)));
