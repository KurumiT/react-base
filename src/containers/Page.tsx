import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import * as Component from "../components";

interface PropsInterface {
  location: any;
  Store: any;
  Dispatch: any;
}

class Page extends React.Component<PropsInterface, {}> {
  public render() {
    return (
      <>
        {true ? (
          <>
            <Route path="/" component={Component.Page.Default} />
          </>
        ) : (
          <>Загрузка...</>
        )}
      </>
    );
  }
}

export default withRouter(
  connect(
    (Store: any) => {
      return { Store };
    },
    (Dispatch: any) => {
      return { Dispatch: (action: any) => Dispatch(action) };
    }
  )(Page)
);
