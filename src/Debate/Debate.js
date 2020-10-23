import React, { useState, useEffect } from "react";
import ReactCountdownClock from "react-countdown-clock";
import "./Debate.scss";
import useTopic from "../Hooks/useTopic";
import categories from "../categories";
import PropTypes from "prop-types";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Debate(props) {
  const [gameState, setGameState] = useState("begin");
  const shuffle = require("shuffle-array");
  const topic1 = useTopic();
  const topic2 = useTopic();
  props.setTopic1(topic1);
  props.setTopic2(topic2);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <section className="timer">Too late...</section>;
    }
  
    return (
      <section className="timer">
        <section className="text">Remaining</section>
        <section className="value">{remainingTime}</section>
        <section className="text">seconds</section>
      </section>
    );
  };

  const pushToVote = () => {
    props.history.push("/vote");
  };

  return (
    <main>
      {gameState === "loading" && <h1>Loading...</h1>}

      <section className="debator-names">
        <section className="player-one-name">
          <h1 style={{ color: "cornflowerblue" }}>{topic1.name}</h1>
        </section>
        VS
        <section className="player-two-name">
          <h1 style={{ color: "darkred" }}>{topic2.name}</h1>
        </section>
      </section>

      <section className="debate-stage">
        <section className="debator">
          <section className="topic-one-card">
            <section className="debator-card">
              <img src={topic1.image} alt="topic" />
            </section>
          </section>
          {props.debators[0] && <h2>Player One: {props.debators[0].name}</h2>}
        </section>
        {gameState === "begin" && (
          <section className="clock">
            <button
              className="debate-button"
              onClick={() => setGameState("prep")}
            >
              Start Research Phase
            </button>
          </section>
        )}

        {gameState === "prep" && (
          // <section className="clock">
      <section className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
          // onComplete={() => setGameState("p1 inform")}
        >
          {renderTime}
        </CountdownCircleTimer>
      </section>
          // </section>
        )}
        {gameState === "p1 inform" && (
          <section className="clock">
            <button
              className="debate-button"
              onClick={() => setGameState("p1 turn")}
            >
              <h2>Start {props.debators[0].name}'s Turn</h2>
            </button>
          </section>
        )}
        {gameState === "p1 turn" && (
          // <section className="clock">
      <section className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => setGameState("p2 inform")}
        >
          {renderTime}
        </CountdownCircleTimer>
      </section>
            
          // </section>
        )}
        {gameState === "p2 inform" && (
          <section className="clock">
            <button
              className="debate-button"
              onClick={() => setGameState("p2 turn")}
            >
              <h2>Start {props.debators[1].name}'s Turn</h2>
            </button>
          </section>
        )}
        {gameState === "p2 turn" && (
          // <section className="clock">
      <section className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => pushToVote()}
        >
          {renderTime}
        </CountdownCircleTimer>
      </section>
          // </section>
        )}
        <section className="debator">
          <section className="topic-two-card">
            <section className="debator-card">
              <img src={topic2.image} alt="topic" />
            </section>
          </section>
          {props.debators[1] && <h2>Player Two: {props.debators[1].name}</h2>}
        </section>
      </section>

      <section className="judges-box">
        Judges
        {props.judges[0] && (
          <section className="judge-names">
            <h1 className="judge">{props.judges[0].name}</h1>
            <h1 className="judge">{props.judges[1].name}</h1>
            <h1 className="judge">{props.judges[2].name}</h1>
          </section>
        )}
        {!props.judges[0] && props.history.push("/error")}
      </section>
    </main>
  );
}

export default Debate;

Debate.propTypes = {
  judges: PropTypes.array,
  debators: PropTypes.array,
  history: PropTypes.object,
  info: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  setTopic1: PropTypes.func,
  setTopic2: PropTypes.func,
};
