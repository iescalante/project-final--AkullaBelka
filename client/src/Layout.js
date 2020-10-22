import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import Main from "./components/Main";
import Profile from './components/Profile';
import GetALoan from './components/GetLoan';
import Transactions from './components/Transactions';
import Signout from "./components/Signout";
import Error from "./components/Error";
import { AppContext } from './AppContext';

const Layout = () => {
  const { userData } = React.useContext(AppContext);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/create-user">
            <CreateUser />
          </Route>
          { userData.currentUser.email &&
            (
            <>
              <Route exact path="/main">
                <Main />
              </Route>
              <Route exact path="/main/profile">
                <Profile />
              </Route>
              <Route exact path="/main/get-loan">
                <GetALoan />
              </Route>
              <Route exact path="/main/transactions">
                <Transactions />
              </Route>
            </>
            )
          }
          <Route exact path="/signout">
            <Signout />
          </Route>
          <Route component={Error} />
        </Switch>
    </Router>
  );
};

export default Layout;