import React, {useState, useEffect} from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import './Debate.scss';
import useTopic from '../Hooks/useTopic'
import categories from '../categories'

function Debate(props) {
  const [gameState, setGameState] = useState("begin")
  const shuffle = require('shuffle-array')
  const category1 = shuffle.pick(categories)
  const category2 = shuffle.pick(categories)
  const category3 = shuffle.pick(categories)
  const topic1 = useTopic(category1)
  const topic2 = useTopic(category2)
  const topic3 = shuffle.pick(categories)
  props.setTopic1(topic1)
  props.setTopic2(topic2)

  useEffect(() => {
    if(topic1 !== typeof Number) {
      props.setTopic1(topic3)
    }
    if(topic2 !== typeof Number) {
      props.setTopic2(topic3)
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
            <h1 style={{color: 'cornflowerblue' }}>{topic1}</h1>
          </section>
          VS
          <section className="player-two-name">
            <h1 style={{color: 'darkred' }}>{topic2}</h1>
          </section>
        </section>

            <section className="debate-stage">  
              <section className="debator">
                <section className="topic-one-card">
                  <section className="debator-card">{topic1}</section>
                </section>
                {props.debators[0] &&
                  <h2>Player One: {props.debators[0].name}</h2>
                }
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
                    <h2>Start {props.debators[0].name}'s Turn</h2>
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
                <h2>Start {props.debators[1].name}'s Turn</h2>
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
            <section className="debator-card">{topic2}</section>
            </section>
            {props.debators[1] &&
              <h2>Player Two: {props.debators[1].name}</h2>
            }
          </section>
        </section>  

        <section className="judges-box">
          Judges
          {props.judges[0] &&
            <section className="judge-names">
              <h1 className="judge">{props.judges[0].name}</h1>
              <h1 className="judge">{props.judges[1].name}</h1>
              <h1 className="judge">{props.judges[2].name}</h1>
            </section>
          }
          {!props.judges[0] && 
            props.history.push('/error')
          }
        </section>
    </main>
  )
}


export default Debate