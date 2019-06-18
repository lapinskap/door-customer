import React, { Component } from "react";
import "./Bootstrap.css";

import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ResetPassword from "./auth/ResetPassword";
import ChangePassword from "./auth/ChangePassword";
import Dashboard from "./auth/Dashboard";

import NoMatch from "./auth/NoMatch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {

  render() {
    //here I am pretending to have silly authorization on the frontend
    const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
        window.sessionStorage.isAuthenticated === true ||  window.sessionStorage.isAuthenticated === "true" ||
        window.localStorage.isAuthenticated === true ||  window.localStorage.isAuthenticated === "true"
          ? <Component {...props} />
          :   <Redirect to={{
            pathname: '/signin',
            state: { from: props.location }
          }} />

      )} />

    )

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to={"/signin"} />}
          />
          <Route
            path={"/signin"}
            component={SignIn}
          />
          <Route path={"/signup"} component={SignUp} />
          <Route path={"/resetpassword"} component={ResetPassword} />
          <Route path={"/changepassword"} component={ChangePassword} />
          <PrivateRoute path={"/dashboard"} component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}
export default App;
