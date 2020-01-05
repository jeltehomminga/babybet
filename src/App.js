import React from "react";
// import { Switch } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import styled from "@emotion/styled";
import Couples from "./components/Couples";
import Babies from './components/Babies'

const Nav = styled.nav(() => ({
  padding: 32,
  width: "100%",
  // backgroundColor: 'hotpink',
  color: "deepSkyBlue",
  display: "flex",
  justifyContent: "space-around"
}));

const NavItem = styled(Link)({
  color: "deepSkyBlue"
});

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/couples">Couples</NavItem>
          <NavItem to="/babies">Babies</NavItem>
        </Nav>
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Couples/>
            </Route>
            <Route path="/couples">
              <Couples />
            </Route>
            <Route path="/babies">
              <Babies />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
