import React, { ReactElement } from "react";
import * as Middleware from "@middlewares/index";
import { useSelector } from "react-redux";

const Default = (): ReactElement => {
  const modals = useSelector((state: any) => state.Modal);

  console.log(modals.length);
  return (
    <>
      <h1>Default page</h1>
      <div>Modals opened: {modals.length}</div>
      <button onClick={() => Middleware.Modal.open("Default")}>Open modal</button>
    </>
  );
};

export default Default;
