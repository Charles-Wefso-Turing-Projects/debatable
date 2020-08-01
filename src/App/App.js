import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from '../Nav/Nav'
import Names from '../Names/Names'
import Debate from '../Debate/Debate'
import Vote from '../Vote/Vote'
import useTopics from '../Hooks/useTopics'
import categories from '../categories'
import {GrStar} from 'react-icons/gr'
import {
  Switch, Route, withRouter, Link
} from 'react-router-dom'


function App() {
  const shuffle = require('shuffle-array')
  const [loading, setLoading] = useState(true)
  const [votes, setVotes] = useState([])
  const [players, setPlayers] = useState([])

  const category1 = shuffle.pick(categories)
  const category2 = shuffle.pick(categories)
  const topic1 = useTopics(category1)
  const topic2 = useTopics(category2)

  const debators = shuffle.pick(players, { 'picks': 2 });

  const judges = players.filter(player => !debators.includes(player))

  console.log("players", players)
  console.log("debators", debators)
  console.log("judges", judges)

  useEffect(() => {
    if (players) {
      setLoading(false)
    }
  }, [players])


  const instructions = (
    <main className="App-main">
      <Nav />
      <section className="instructions">
      <section className="card">
        <h1>Instructions for Playing</h1>
        <ol>
          <li>Enter Player Names - 
            Two users will be randomly selected to debate, while the rest will be judges.
          </li>
          <li>Each Debator will be assigned a subject argue in favor of</li>
          <li>
            <ol>Debate Phases
              <li>At the beginning of the debate each player has 30 seconds to research their subjects</li>
              <li>Player One has 60 seconds to explain why their team is superior</li>
              <li>Player Two will recieve 60 seconds as well</li>
              <li>Shouting and Crosstalk: Players will recieve 30 seconds to interupt and make personal attacks</li>
            </ol>
          </li>
          <li>Voting: The Judges make their decision.</li>
          <li>The person with the most votes wins. Seems like the obvious way to decide the winner.</li>
        </ol>
        <Link to="/names" style={{ textDecoration: 'none' }}> BEGIN </Link>
      </section>
      </section>
    </main>
  )
  
  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }  

  return (
    <Switch>
      <Route
        path="/winner"
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return(
            <>
            <Nav />
            <section className="winners">
              {votes[0].p1 > votes[0].p2 &&
                <section className="wins card" >
                  Team {topic1.correct_answer} Wins.
                </section>
              }
              {votes[0].p1 < votes[0].p2 &&
                <section className="wins card">
                    Team {topic2.correct_answer} Wins.
                </section>
              }
              <button onClick={() => routeProps.history.push('/')}>Restart?</button>
            </section>
            </>
          )
        }
        }
      />
        <Route
        path="/loading"
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return(
            <section className="debate">
              <Nav />
              <h1>Loading...</h1>
            </section>
          )}
        }
      />
      <Route
        path="/vote"
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return(
            <section className="vote">
              <Nav />
              <Vote {...routeProps} setVotes={setVotes} topic1={topic1} topic2={topic2} debators={debators} judges={judges}/>
            </section>
          )}
        }
      />
      <Route
        path="/debate"
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return(
            <section className="debate">
              <Nav />
              <Debate {...routeProps} topic1={topic1} topic2={topic2} debators={debators} judges={judges}/>
            </section>
          )}
        }
      />
      <Route
        path="/names"
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return(
          <section className="names">
            <Nav />
              <Names setPlayers= {setPlayers}/>
          </section>
          )}
          }
      />
      <Route 
        exact path="/instructions" 
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return( instructions )
        }}
      />
        <Route 
        exact path="/error" 
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return( 
            <section className="error">
              <Nav />
              You've arrived at the wrong conclusion.
            </section>
        )}
      }
      />
      <Route 
        exact path="/" 
        render={(routeProps) => {
          const { params } = routeProps.match
          const { id } = params
          return( 
            <section className="splash">
              <section className="card">
                <header>{<GrStar />}{'DEBATABLE'}{<GrStar />}</header>
                <Link to= "/instructions">click to start</Link>
              </section>
            </section>
        )}
      }
      />

    </ Switch>
  )
}

export default App;
