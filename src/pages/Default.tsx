import React, { ReactElement } from "react";
import * as Middleware from "@middlewares/index";
import { useSelector } from "react-redux";

const Default = (): ReactElement => {
  const modals = useSelector((state: any) => state.Modal);
  
  return (
    <>
      <h1>Default page</h1>
      <span>Modals opened: {modals.count}</span>
      <button onClick={() => Middleware.Modal.open("Default")}>Open modal</button>
    </>
  );
};

export default Default;
