import React, {useState} from 'react';
import './Vote.scss';
import {Link} from 'react-router-dom'


function Vote(props) {

  const [p1Votes, setp1Votes] = useState(0)
  const [p2Votes, setp2Votes] = useState(0)
  const [j1Voted, setJ1Voted] = useState(false)
  const [j2Voted, setJ2Voted] = useState(false)
  const [j3Voted, setJ3Voted] = useState(false)


  return(
  <main>

  <section className="votes">
    {!props.judges[0] && props.history.push('/error')}
    <section className="vote">
    Judge {props.judges[0].name} Votes
      <button style={{ 'background-color': 'cornflowerblue' }} onClick={( ) => {
        if(!j1Voted){ 
          setp1Votes(p1Votes + 1)
          setJ1Voted(true)
        } else {
          setp1Votes(p1Votes + 0)
        }
      }
    }>
        Team: {props.topic1}
      </button>
      <button style={{ 'background-color': 'darkred' }}onClick={( ) => {
        if(!j1Voted){
          setp2Votes(p2Votes + 1)
          setJ1Voted(true)
        } else {
          setp2Votes(p2Votes + 0)
        }
      }
    }>
        Team: {props.topic2}
      </button>
    </section>
    <section className="vote">
    Judge {props.judges[1].name} Votes
        <button style={{ 'background-color': 'cornflowerblue' }} onClick={( ) => {
          if(!j2Voted){
            setp1Votes(p1Votes + 1)
            setJ2Voted(true)
          } else {
            setp1Votes(p1Votes + 0)
          }
        }
      }>
          Team: {props.topic1}
        </button>
        <button style={{ 'background-color': 'darkred' }}onClick={( ) => {
          if(!j2Voted){
            setp2Votes(p2Votes + 1)
            setJ2Voted(true)
          } else {
            setp2Votes(p2Votes + 0)
          }
        }
      }>
          Team: {props.topic2}
      </button>
    </section>
    <section className="vote">
    Judge {props.judges[2].name} Votes
        <button style={{ 'background-color': 'cornflowerblue' }} onClick={( ) => {
          if(!j3Voted){
            setp1Votes(p1Votes + 1)
            setJ3Voted(true)
          } else {
            setp1Votes(p1Votes + 0)
          }
        }
      }>
            Team: {props.topic1}
          </button>
          <button style={{ 'background-color': 'darkred' }} onClick={( ) => {
            if(!j3Voted){
              setp2Votes(p2Votes + 1)
              setJ3Voted(true)
            } else {
              setp2Votes(p2Votes + 0)
            }
          }
        }>
            Team: {props.topic2}
        </button>
    </section>
    </section> 
    <section>
      <Link to="/winner" onClick={() => {
        props.setVotes([{"p1": p1Votes, "p2": p2Votes}])
      }}>
          Submit Votes
      </Link>
    </section>
    </main>
  )
}


export default Vote