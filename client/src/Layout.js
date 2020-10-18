import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import Main from "./components/Main";
import Signout from "./components/Signout";
import Error from "./components/Error";

const Layout = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/create-user">
            <CreateUser />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/signout">
            <Signout />
          </Route>
          <Route component={Error} />
        </Switch>
    </Router>
  );
};

export default Layout;