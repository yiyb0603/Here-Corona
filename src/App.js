import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AdminLogin from "./containers/AdminContainer/AdminLoginContainer";
import Sample from "components/Navbar/sample";

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
