import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen";

const Root: React.FC = () => {
  return <Redirect to="/homeScreen" />;
};

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={Root} path="/" />
        <Route component={HomeScreen} path="/homeScreen" />
      </Switch>
    </React.Fragment>
  );
};
