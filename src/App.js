import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import styled from "@emotion/styled";
// import Couples from "./components/Couples";
import Babies from "./components/Babies";
import Home from "./components/Home";
import BabyBet from "./components/BabyBet";
import HighScore from "./components/HighScore";
import Login from "./components/Login";
import { StitchAuthProvider, useStitchAuth } from "./context/StitchAuth";

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


const AppUi = () => {
    const {
    isLoggedIn,
    actions: { handleLogout }
  } = useStitchAuth();
  return (
    <div className="App">
      <header>
        <Nav>
          <NavItem to="/">Home</NavItem>
          {/* <NavItem to="/couples">Couples</NavItem> */}
          <NavItem to="/babies">Babies</NavItem>
          <NavItem to="/babybet">Babybet</NavItem>
        </Nav>
      </header>
      {/* {isLoggedIn && } */}

      {isLoggedIn ? (
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/couples">
              <Couples />
            </Route> */}
            <Route path="/babies">
              <Babies />
            </Route>
            {/* <Route path="/babybet">
              <BabyBet />
            </Route> */}
            <Route path="/babybet/:baby">
              <BabyBet />
            </Route>
            <Route path="/highscore">
              <HighScore />
            </Route>
          </Switch>
          <button onClick={handleLogout}>Logout</button>
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <StitchAuthProvider>
        <AppUi />
      </StitchAuthProvider>
    </Router>
  );
}

export default App;
