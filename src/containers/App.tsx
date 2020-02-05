import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import Modal from "./Modal";
import Page from "./Page";

import "./../../public/style/style.sass";

const store = Store.create();

export default class App extends React.Component {
  public render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Page />
            <Modal />
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}
