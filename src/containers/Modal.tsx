import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Modals from "../components/modals";
interface PropsInterface {
  location: any;
  Store: any;
  Dispatch: any;
}

export default withRouter(
  connect(
    (Store: any) => {
      return { Store };
    },
    (Dispatch: any) => {
      return { Dispatch: (action: any) => Dispatch(action) };
    }
  )(
    class Modal extends React.Component<PropsInterface, {}> {
      public initComponent(Component: any) {
        switch (Component.modal) {
          case "Default":
            return <Modals.Default {...Component.data} />;
          default:
            return <></>;
        }
      }

      public render() {
        return (
          <>
            {this.props.Store.Modal.length !== 0 ? (
              <>{this.initComponent(this.props.Store.Modal[this.props.Store.Modal.length - 1])}</>
            ) : (
              <></>
            )}
          </>
        );
      }
    }
  )
);
