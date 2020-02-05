import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Middleware from "../../middlewares";

interface PropsInterface {
  location: any;
  Store: any;
  Dispatch: any;
}

class Default extends React.Component<PropsInterface, {}> {
  constructor(Props: PropsInterface) {
    super(Props);
    this.state = {};
  }

  public componentDidMount() {
    document.title = process.env.SITE_NAME + " | Page";
  }

  public render() {
    return (
      <>
        <h1>Default page</h1>
        <button
          onClick={() => {
            this.props.Dispatch(Middleware.Modal.open("Default"));
          }}
        >
          Open modal
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
