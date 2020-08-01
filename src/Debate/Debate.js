import React, {useState, useEffect} from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import usePlayer from '../Hooks/usePlayer'
import './Debate.scss';
import {Link} from 'react-router-dom'
import {GrStar} from 'react-icons/gr'

function Debate(props) {
  const [gameState, setGameState] = useState("begin")
  const shuffle = require('shuffle-array')

  useEffect(() => {
    if (props.debators === undefined || props.judges === undefined) {
      setGameState("loading")
    }
  }, [])
  

  const pushToVote = () => {
    props.history.push('/vote')
  }


  return (
    
    <main>

    { gameState === "loading" && 
      <h1>Loading...</h1>
      }  

        <section className="debator-names">
          <section className="player-one-name">
            <h1 style={{color: 'cornflowerblue' }}>{props.topic1.correct_answer}</h1>
          </section>
          VS
          <section className="player-two-name">
            <h1 style={{color: 'darkred' }}>{props.topic2.correct_answer}</h1>
          </section>
        </section>

            <section className="debate-stage">  
              <section className="debator">
                <section className="topic-one-card">
                  <section className="debator-card">{props.topic1.correct_answer}</section>
                </section>
                  <h2>{props.debators[0].name}</h2>
              </section>
      {gameState === "begin" &&
              <section className="clock">
                <button
                  className="card"
                  onClick={() => setGameState("prep")}
                  >
                  Start Research Phase
                </button>
              </section>
      }

      {gameState === "prep" && 
            <section className="clock">
              <ReactCountdownClock seconds={3}
                                    color="#000"
                                    alpha={0.9}
                                    size={300}
                                    onComplete={() => setGameState("p1 inform")} />
            </section>
      }
      {gameState === "p1 inform" && 
                  <section className="clock">
                    <button
                      className="card"
                      onClick={() => setGameState("p1 turn")}
                      >
                      Start Player One Turn
                    </button>
                  </section>

      }
      {gameState === "p1 turn" && 
            <section className="clock">
              <ReactCountdownClock seconds={6}
                                    color="#000"
                                    alpha={0.9}
                                    size={300}
                                    onComplete={() => setGameState("p2 inform")} />
            </section>
      }
      {gameState === "p2 inform" &&
              <section className="clock">
              <button
                className="card"
                onClick={() => setGameState("p2 turn")}
                >
                Start Player Two Turn
              </button>
              </section>
      }
      {gameState === "p2 turn" && 
            <section className="clock">
              <ReactCountdownClock seconds={6}
                                    color="#000"
                                    alpha={0.9}
                                    size={300}
                                    onComplete={() => pushToVote()} />
            </section>
      }
          <section className="debator">
            <section className="topic-two-card">
            <section className="debator-card">{props.topic2.correct_answer}</section>
            </section>
              <h2>{props.debators[1].name}</h2>
          </section>
        </section>  

        <section className="judges-box">
          Judges
          <section className="judge-names">
            <h1 className="judge">{props.judges[0].name}</h1>
            <h1 className="judge">{props.judges[1].name}</h1>
            <h1 className="judge">{props.judges[2].name}</h1>
          </section>
        </section>
    </main>
  )
}


export default Debate