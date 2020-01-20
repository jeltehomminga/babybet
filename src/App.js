import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Babies from "./components/Babies";
import BabyBet from "./components/BabyBet";
import BabyBets from "./components/BabyBets";
import HighScore from "./components/HighScore";
import Home from "./components/Home";
import Login from "./components/Login";
import Parents from "./components/Parents";
import { StitchAuthProvider, useStitchAuth } from "./context/StitchAuth";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import { Container } from "reactstrap";
import ConfirmEmail from "./components/ConfirmEmail";

const AppUi = () => {
  const { isLoggedIn } = useStitchAuth();
  return (
    <div className="App">
      {isLoggedIn && (
        <header>
          <Nav />
        </header>
      )}
      <main>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          {isLoggedIn ? (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>{" "}
              <Route exact path="/babies">
                <Babies />
              </Route>
              <Route path="/babies/parents">
                <Parents />
              </Route>
              <Route exact path="/babybets">
                <BabyBets />
              </Route>
              <Route path="/babybets/highscore">
                <HighScore />
              </Route>
              <Route path={"/babybets/newbet/:babyid"}>
                <BabyBet />
              </Route>
              <Route path={"/profile"}>
                <Profile />
              </Route>
            </Switch>
          ) : (

            <>
            <Login />

            <Route path={"/confirmemail"}>
            <ConfirmEmail />
            </Route>
            </>
          )}
        </Container>
      </main>
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
