import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomeScreen } from "./components/HomeScreen";

const Root: React.FC = () => {
  return <Redirect to="/sticky_notes_app/homeScreen" />;
};

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact component={Root} path="/sticky_notes_app" />
        <Route component={HomeScreen} path="/sticky_notes_app/homeScreen" />
      </Switch>
    </React.Fragment>
  );
};
