import React from "react";
import studentReducer from "./studentReducer";
import courseReducer from "./courseReducer";
import { combineReducers } from "redux";

const appReducers = combineReducers({
  studentState: studentReducer,
  courseState: courseReducer,
});

export default appReducers;
