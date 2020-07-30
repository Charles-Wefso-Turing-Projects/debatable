import React, {useState, useEffect} from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import usePlayer from '../Hooks/usePlayer'
import './Vote.scss';
import {Link} from 'react-router-dom'


function Vote(props) {


  const [p1Votes, setp1Votes] = useState(0)
  const [p2Votes, setp2Votes] = useState(0)
  const [j1Voted, setJ1Voted] = useState(false)
  const [j2Voted, setJ2Voted] = useState(false)
  const [j3Voted, setJ3Voted] = useState(false)


  return(
  <section className="votes">
    <section className="j1-vote">
    Judge {props.players[2].name} Votes
      <button onClick={( ) => {
                if(!j1Voted){ 
                  setp1Votes(p1Votes + 1)
                  setJ1Voted(true)
                } else {
                  setp1Votes(p1Votes + 0)
                }
              }
      }>
        Player One
      </button>
      <button onClick={( ) => {
                if(!j1Voted){
                  setp2Votes(p2Votes + 1)
                  setJ1Voted(true)
                } else {
                  setp2Votes(p2Votes + 0)
                }
              }
      }>
        Player Two
      </button>
    </section>
    <section className="j2-vote">
    Judge {props.players[3].name} Votes
        <button onClick={( ) => {
                  if(!j2Voted){
                    setp1Votes(p1Votes + 1)
                    setJ2Voted(true)
                  } else {
                    setp1Votes(p1Votes + 0)
                  }
                }
        }>
          Player One
        </button>
        <button onClick={( ) => {
                  if(!j2Voted){
                    setp2Votes(p2Votes + 1)
                    setJ2Voted(true)
                  } else {
                    setp2Votes(p2Votes + 0)
                  }
                }
        }>
          Player Two
      </button>
    </section>
    <section className="j3-vote">
    Judge {props.players[4].name} Votes
        <button onClick={( ) => {
                    if(!j3Voted){
                      setp1Votes(p1Votes + 1)
                      setJ3Voted(true)
                    } else {
                      setp1Votes(p1Votes + 0)
                    }
                  }
          }>
            Player One
          </button>
          <button onClick={( ) => {
                    if(!j3Voted){
                      setp2Votes(p2Votes + 1)
                      setJ3Voted(true)
                    } else {
                      setp2Votes(p2Votes + 0)
                    }
                  }
          }>
            Player Two
        </button>
    </section>
      <Link to="/winner" onClick={() => {
                          props.setVotes([{"p1": p1Votes, "p2": p2Votes}])
                        }}>
          Submit Votes
      </Link>
    </section> 
  )
}


export default Vote