import React, { ReactElement } from "react";
import { useStore } from "react-redux";
import * as Middleware from "@middlewares/index";

const Default = (): ReactElement => {
  const Store = useStore();
  return (
    <>
      <div className="modal-background">
        <div className="modal">
          <h2>Default modal #{Store.getState().Modal.length}!</h2>
          <button onClick={() => Middleware.Modal.open("Default")}>Open modal</button>
          <button onClick={() => Middleware.Modal.close()}>Close modal</button>
          <button onClick={() => Middleware.Modal.closeAll()}>Close all modals</button>
        </div>
      </div>
    </>
  );
};

export default Default;
