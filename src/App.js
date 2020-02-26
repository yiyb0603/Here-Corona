import React from "react";
// import logo from "./logo.svg";
import AdminLogin from "./components/Admin/AdminLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Social from "./components/social/Social";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/" component={Main} />
        <Route exact path="/social" component={Social} />
      </Switch>
    </Router>
  );
}

export default App;
