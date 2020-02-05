import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Middleware from "../../middlewares";

interface PropsInterface {
  location: any;
  Store: any;
  Dispatch: any;
}

class Default extends React.Component<PropsInterface> {
  public render() {
    return (
      <>
        Rules modal!
        <button
          onClick={() => {
            this.props.Dispatch(Middleware.Modal.close());
          }}
        >
          Close modal
        </button>
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
  )(Default)
);
