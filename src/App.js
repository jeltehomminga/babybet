import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Babies from "./components/Babies";
import BabyBet from "./components/BabyBet";
import HighScore from "./components/HighScore";
import Home from "./components/Home";
import Login from "./components/Login";
import Parents from "./components/Parents";
import { StitchAuthProvider, useStitchAuth } from "./context/StitchAuth";
import Nav from "./components/Nav";

const AppUi = () => {
  const {
    isLoggedIn,
    actions: { handleLogout }
  } = useStitchAuth();
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      {isLoggedIn ? (
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/babies">
              <Babies />
            </Route>
            <Route path="/babies/parents">
              <Parents />
            </Route>
            <Route exact path="/babybet">
              <BabyBet />
            </Route>
            <Route path="/babybet/highscore">
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

export default () => (
    <Router>
      <StitchAuthProvider>
        <AppUi />
      </StitchAuthProvider>
    </Router>
  );

