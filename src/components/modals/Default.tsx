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
        <div className="modal-background">
          <div className="modal">
            <h2>Default modal #{this.props.Store.Modal.length}!</h2>
            <button
              onClick={() => {
                this.props.Dispatch(Middleware.Modal.open("Default"));
              }}
            >
              Open modal
            </button>
            <button
              onClick={() => {
                this.props.Dispatch(Middleware.Modal.close());
              }}
            >
              Close modal
            </button>
            <button
              onClick={() => {
                this.props.Dispatch(Middleware.Modal.closeAll());
              }}
            >
              Close all modals
            </button>
          </div>
        </div>
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
