import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

import { configure, addDecorator } from "@storybook/react";

import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../src/components/TaskSlice";

const store = createStore(rootReducer);

addDecorator((S) => (
  <Provider store={store}>
    <S />
  </Provider>
));

configure(require.context("../src", true, /\.stories\.tsx$/), module);
