import React, { useState, useEffect } from "react";
import "./App.scss";
import Nav from "../Nav/Nav";
import Names from "../Names/Names";
import Debate from "../Debate/Debate";
import Vote from "../Vote/Vote";
import { GrStar } from "react-icons/gr";
import { Switch, Route, Link, NavLink } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState([]);
  const [players, setPlayers] = useState([]);

  const shuffle = require("shuffle-array");
  const [topic1, setTopic1] = useState("");
  const [topic2, setTopic2] = useState("");

  const debators = shuffle.pick(players, { picks: 2 });
  const judges = players.filter((player) => !debators.includes(player));

  useEffect(() => {
    if (players) {
      setLoading(false);
    }
  }, [players]);

  const instructions = (
    <main className="App-main">
      <Nav />
      <section className="instructions">
        <section className="card">
          <h1>Instructions for Playing</h1>
          <section className="rules">
            <p>
              Enter Player Names - Two will be randomly selected to debate, the
              rest are judges.
            </p>
            <p>Each Debator will be assigned a subject to represent.</p>
            <ol>
              Debate Phases
              <li>
                At the beginning of the debate players have 30 seconds to
                research their subjects.
              </li>
              <li>
                Player One has 60 seconds to explain why their topic is
                superior.
              </li>
              <li>Player Two will recieve 60 seconds as well.</li>
            </ol>
            <p>Voting: The Judges make their decision.</p>
            <p>
              The person with the most votes wins. Seems like the obvious way to
              decide the winner.
            </p>
          </section>
          <Link to="/names" style={{ textDecoration: "none" }}>
            {" "}
            BEGIN{" "}
          </Link>
        </section>
      </section>
    </main>
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Switch>
      <Route
        path="/winner"
        render={(routeProps) => {
          if (votes[0]) {
            return (
              <section className="winners-page">
                <Nav />
                <section className="winners">
                  {votes[0].p1 > votes[0].p2 && (
                    <section className="wins-card">
                       <img src={topic1.image} alt="topic" />
                       <h2>Team {topic1.name} Wins.</h2>
                    </section>
                  )}
                  {votes[0].p1 < votes[0].p2 && (
                    <section className="wins-card">
                       <img src={topic2.image} alt="topic" />
                       <h2>Team {topic2.name} Wins.</h2>
                    </section>
                  )}
                  <button className="restart-button" onClick={() => routeProps.history.push("/")}>
                    Restart?
                  </button>
                </section>
              </section>
            );
          }
          routeProps.history.push("/error");
        }}
      />
      <Route
        path="/loading"
        render={(routeProps) => {
          return (
            <section className="debate">
              <Nav />
              <h1>Loading...</h1>
            </section>
          );
        }}
      />
      <Route
        path="/vote"
        render={(routeProps) => {
          return (
            <section className="vote-page">
              <Nav />
              <section className="main">
                <Vote
                  {...routeProps}
                  setVotes={setVotes}
                  topic1={topic1}
                  topic2={topic2}
                  debators={debators}
                  judges={judges}
                />
              </section>
            </section>
          );
        }}
      />
      <Route
        path="/debate"
        render={(routeProps) => {
          return (
            <section className="debate">
              <Nav />
              <Debate
                {...routeProps}
                setTopic1={setTopic1}
                setTopic2={setTopic2}
                debators={debators}
                judges={judges}
              />
            </section>
          );
        }}
      />
      <Route
        path="/names"
        render={(routeProps) => {
          return (
            <section className="name-page">
              <Nav />
              <section className="main">

              <section className="names">
                <Names {...routeProps} setPlayers={setPlayers} />
              </section>
              </section>
            </section>
          );
        }}
      />
      <Route
        exact
        path="/instructions"
        render={(routeProps) => {
          return instructions;
        }}
      />
      <Route
        exact
        path="/error"
        render={(routeProps) => {
          return (
            <section className="debate">
              <Nav />
              <section className="error-page">
                <section className="error card">
                  <h1>You've arrived at the wrong conclusion.</h1>
                  <button onClick={() => routeProps.history.push("/")}>
                    Start again?
                  </button>
                </section>
              </section>
            </section>
          );
        }}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => {
          return (
            <div className="App">
            <header className="App-header">
              <div role="logo" className="logo">
                debatable
              </div>
              <section className="buttons">
                <NavLink
                  to={"/instructions"}
                  className="start"
                  style={{ textDecoration: "none" }}
                >
                  START
                </NavLink>
              </section>
            </header>
          </div>
          );
        }}
      />
    </Switch>
  );
}

export default App;
