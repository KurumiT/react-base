import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import * as Page from "@pages/index";

const Router = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" component={Page.Default} />
    </Switch>
  );
};

export default Router;
