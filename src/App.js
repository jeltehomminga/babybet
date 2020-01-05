import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import styled from "@emotion/styled";
import Couples from "./components/Couples";
import Babies from "./components/Babies";
import Home from "./components/Home";

const Nav = styled.nav(() => ({
  padding: 32,
  color: "deepSkyBlue",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start"
}));

const NavItem = styled(Link)({
  color: "deepSkyBlue"
});

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/couples">Couples</NavItem>
            <NavItem to="/babies">Babies</NavItem>
          </Nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/couples">
              <Couples />
            </Route>
            <Route path="/babies">
              <Babies />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
