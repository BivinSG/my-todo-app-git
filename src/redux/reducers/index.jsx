import React from "react";
import studentReducer from "./studentReducer";
import courseReducer from "./courseReducer";

const appReducers = {
  studentState: studentReducer,
  courseState: courseReducer,
};

export default appReducers;
