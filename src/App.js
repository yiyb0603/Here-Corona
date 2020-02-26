import React from "react";
// import logo from "./logo.svg";
// import AdminLogin from "./components/Admin/AdminLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Social from "./components/social/Social";
import DaeguBoard from './components/Board/Daegu/DaeguBoard';
import SeoulBoard from './components/Board/Seoul/SeoulBoard';
import BusanBoard from './components/Board/Busan/BusanBoard';
import NewsTemplate from './components/News/NewsTemplate';
import Symptom from './components/Symptom/symptom';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/admin" component={AdminLogin} /> */}
        <Route exact path="/" component={Main} />
        <Route exact path="/social" component={Social} />
        <Route exact path ="/DaeguBoard" component ={DaeguBoard} />
        <Route exact path ="/SeoulBoard" component ={SeoulBoard} />
        <Route exact path ="/BusanBoard" component ={BusanBoard} />
        <Route exact path ="/News" component ={NewsTemplate} />
        
        <Route exact path ="/symptom" component={Symptom}/>
      </Switch>
    </Router>
  );
}

export default App;
