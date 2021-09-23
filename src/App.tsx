// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Candidates from "./pages/Candidates";
import Home from "pages/Home";
import Profile from "pages/Profile";
import "./styles/style.scss";
import { useEffect } from "react";

export default function App() {
  // Properties
  const TOTAL_USERS = 3;

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Home totalUsers={TOTAL_USERS} />
          </Route>
          <Route path={"/candidates"}>
            <Candidates totalUsers={TOTAL_USERS} />
          </Route>
          <Route path={"/profile/:url"}>
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
