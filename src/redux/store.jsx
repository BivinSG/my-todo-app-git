import { createStore } from "redux";
import appReducer from "./actions/reducers";

const store = createStore(appReducer);

export default store;
