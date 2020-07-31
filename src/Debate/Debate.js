import React, {useState, useEffect} from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import usePlayer from '../Hooks/usePlayer'
import './Debate.scss';
import {Link} from 'react-router-dom'
import {GrStar} from 'react-icons/gr'

function Debate(props) {
  const [gameState, setGameState] = useState("begin")
  const shuffle = require('shuffle-array')

  const debators = [props.debator1, props.debator2]


  useEffect(() => {
    if (debators === undefined) {
      setGameState("loading")
    }
  }, [debators])
  

  const pushToVote = () => {
    props.history.push('/vote')
  }


  return (
    
    <main>

    { gameState === "loading" && 
      <h1>Loading...</h1>
      }  

        <section className="debator-names">
            {/* <h1>{`Debator One: ${debators[0].name}`}</h1> */}
          VS
            {/* <h1>{`Debator Two: ${debators[1].name}`}</h1> */}
        </section>

      {gameState === "begin" &&
            <section>  
              <section>
                <section className="topic-one-card">
                  Team {props.topic1.correct_answer}
                </section>
              </section>
              <button
                onClick={() => setGameState("prep")}
                >
                Start Research Phase
              </button>
              <section>
                <section className="topic-two-card">
                Team {props.topic2.correct_answer}
                </section>
              </section>
            </section>  
      }

      {gameState === "prep" && 
          <section>  
            <section>
              <section className="topic-one-card">
                Team {props.topic1.correct_answer}
              </section>
            </section>
            <ReactCountdownClock seconds={3}
                                  color="#000"
                                  alpha={0.9}
                                  size={300}
                                  onComplete={() => setGameState("p1 inform")} />
            <section>
              <section className="topic-two-card">
              Team {props.topic2.correct_answer}
              </section>
            </section>
          </section>  
      }
      {gameState === "p1 inform" && 
          <section>
            <section>
                <section className="topic-one-card">
                  Team {props.topic1.correct_answer}
                  <button
                    onClick={() => setGameState("p1 turn")}
                    >
                    Start Player One Turn
                  </button>
                </section>
              </section>
              <section>
                <section className="topic-two-card">
                Team {props.topic2.correct_answer}
                </section>
              </section>
          </section>
      }
      {gameState === "p1 turn" && 
          <section>  
            <section>
              <section className="topic-one-card">
                Team {props.topic1.correct_answer}
              </section>
            </section>
            <ReactCountdownClock seconds={6}
                                  color="#000"
                                  alpha={0.9}
                                  size={300}
                                  onComplete={() => setGameState("p2 inform")} />
            <section>
              <section className="topic-two-card">
              Team {props.topic2.correct_answer}
              </section>
            </section>
        </section>  
      }
      {gameState === "p2 inform" &&
        <section>
          <section>
            <section className="topic-one-card">
              Team {props.topic1.correct_answer}
            </section>
          </section>
          <section>
            <section className="topic-two-card">
            Team {props.topic2.correct_answer}
              <button
                onClick={() => setGameState("p2 turn")}
                >
                Start Player Two Turn
              </button>
            </section>
          </section>
        </section>  
      }
      {gameState === "p2 turn" && 
          <section>  
            <section>
              <section className="topic-one-card">
                Team {props.topic1.correct_answer}
              </section>
            </section>
            <ReactCountdownClock seconds={6}
                                  color="#000"
                                  alpha={0.9}
                                  size={300}
                                  onComplete={() => pushToVote()} />
            <section>
              <section className="topic-two-card">
              Team {props.topic2.correct_answer}
              </section>
            </section>
        </section>  
      }

        <section className="judges-box">
          <h1 className="judge">Judge: J1- Name</h1>
          <h1 className="judge">Judge: J2- Name</h1>
          <h1 className="judge">Judge: J3- Name</h1>
        </section>
    </main>
  )
}


export default Debate