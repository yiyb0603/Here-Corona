import React from "react";
import AdminLogin from "containers/AdminContainer/AdminLogin/AdminLoginContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import Social from "./social/Social";
import BoardInsert from "containers/BoardContainer/BoardInsert/BoardInsertContainer";
import BoardPage from "containers/BoardContainer/BoardPage/BoardPageContainer";
import NationWideBoard from "./Board/NationWideBoard";
import BusanBoard from 'containers/BoardContainer/BoardList/BusanBoardListContainer';
import DaeguBoard from "containers/BoardContainer/BoardList/DaeguBoardListContainer";
import SeoulBoard from "containers/BoardContainer/BoardList/SeoulBoardListContainer";
import NewsTemplate from "./News/NewsTemplate";
import NewsInsert from "./News/NewsInsert";
import NewsPage from "./News/NewsPage";
import Symptom from "./Symptom/symptom";
import Market from "./Market/market";
import WorldWide from "./WorldWide/WorldWide";
import World from "./WorldInfoAsia/World";
import AdminPage from "containers/AdminContainer/Admin";
import Death from "components/Status/Death";
import Heal from "components/Status/Heal";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/" component={Main} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/worldWide" component={WorldWide} />
        <Route exact path="/worldInfoAsia" component={World} />
        <Route exact path="/BoardPage" component={BoardPage} />
        <Route exact path="/BoardInsert" component={BoardInsert} />
        <Route exact path="/NationWideBoard" component={NationWideBoard} />
        <Route exact path="/DaeguBoard" component={DaeguBoard} />
        <Route exact path="/SeoulBoard" component={SeoulBoard} />
        <Route exact path="/BusanBoard" component={BusanBoard} />
        <Route exact path="/News" component={NewsTemplate} />
        <Route exact path="/NewsInsert" component={NewsInsert} />
        <Route exact path="/NewsPage" component={NewsPage} />
        <Route exact path="/symptom" component={Symptom} />
        <Route exact path="/market" component={Market} />
        <Route exact path="/adminpage" component={AdminPage} />
        <Route exact path="/passed" component={Death} />
        <Route exact path="/healed" component={Heal} />
      </Switch>
    </Router>
  );
}

export default App;
