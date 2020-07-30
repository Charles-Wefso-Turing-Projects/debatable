import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from '../Nav/Nav'
import Names from '../Names/Names'
import Debate from '../Debate/Debate'
import Vote from '../Vote/Vote'
import useTopics from '../Hooks/useTopics'
import categories from '../categories'
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

  let debators = []

  const debator1 = shuffle.pick(players)

  const assignedD1 = players.map(player => {
    if(player.name === debator1.name){
      const index = players.indexOf(player)
      debators.push(debator1)
    }
    console.log("debators", debators)
    console.log("players", players)
  })

  const debator2 = shuffle.pick(players)

  // const assignedD2 = assignedD1.map(player => {
  //   if(player.name = debator2.name){
  //     assignedD1.slice(player)
  //   }
  // })

  // const judges = assignedD2  



//


  useEffect(() => {
    if (players) {
      setLoading(false)
    }
  }, [players])


  const instructions = (
    <main className="App-main">
      
      <section className="instructions">
        <h1>Instructions for Playing</h1>
        <ol>
          <li>Step One</li>
          <li>Step Two</li>
          <li>Step Three</li>
          <li>Step Four</li>
          <li>Step Five</li>
        </ol>
        <Link to="/names" style={{ textDecoration: 'none' }}> BEGIN </Link>
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
            <section>
              {votes[0].p1 > votes[0].p2 &&

                <section className="wins" >
                  Team {topic1.correct_answer} Wins
                </section>

              }

              {votes[0].p1 < votes[0].p2 &&

                <section className="wins">
                    Team {topic2.correct_answer} Wins
                </section>
              }

            </section>
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
              
              <Vote {...routeProps} setVotes={setVotes} topic1={topic1} topic2={topic2} debator1={debator1} debator2={debator2} players={players}/>
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
              
              <Debate {...routeProps} topic1={topic1} topic2={topic2} debator1={debator1} debator2={debator2}/>
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
              Debatable
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
              Debatable
              <Link to= "/instructions">click to start</Link>
            </section>
        )}
      }
      />

    </ Switch>
  )
}

export default App;
