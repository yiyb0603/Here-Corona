import React from "react";
// import logo from "./logo.svg";
import AdminLogin from './components/Admin/AdminLogin';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sample from './components/Navbar/sample';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/admin" component={AdminLogin} /> */}
        <Sample />
      </Switch>
    </Router>
  );
}

export default App;
