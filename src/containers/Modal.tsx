import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import * as Modals from "@components/modals";

const Modal = (): ReactElement => {
  const modals = useSelector((state: any) => state.Modal);

  if (modals.length) {
    switch (modals[modals.length - 1].modal) {
      case "Default":
        return <Modals.Default {...modals[modals.length - 1].data} />;
      default:
        return <></>;
    }
  }
  return <></>;
};

export default Modal;
