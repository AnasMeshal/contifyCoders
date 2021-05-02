import React from "react";
import { Route, Switch } from "react-router";

// Components
import Home from "../components/Home";
import SubjectList from "../components/SubjectList";
import SubjectDetail from "../components/SubjectDetail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/subjects/:subjectSlug">
        <SubjectDetail />
      </Route>
      <Route exact path="/subjects">
        <SubjectList />
      </Route>
    </Switch>
  );
};

export default Routes;
