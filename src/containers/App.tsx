import React from "react";
import { Provider } from "react-redux";
import { Store } from "@helpers/Store";
import Modal from "./Modal";
import Router from "./Router";

import "@public/style/style.sass";

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={Store}>
        <Router />
        <Modal />
      </Provider>
    );
  }
}
