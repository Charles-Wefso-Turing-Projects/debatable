import React, {useState} from 'react';
import './Vote.scss';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


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
      <button style={{ 'backgroundColor': 'cornflowerblue' }} onClick={( ) => {
        if(!j1Voted){ 
          setp1Votes(p1Votes + 1)
          setJ1Voted(true)
        } else {
          setp1Votes(p1Votes + 0)
        }
      }
    }>
        <h3>Team: {props.topic1.correct_answer}</h3>
      </button>
      <button style={{ 'backgroundColor': 'darkred' }}onClick={( ) => {
        if(!j1Voted){
          setp2Votes(p2Votes + 1)
          setJ1Voted(true)
        } else {
          setp2Votes(p2Votes + 0)
        }
      }
    }>
        <h3>Team: {props.topic2.correct_answer}</h3>
      </button>
    </section>
    <section className="vote">
    Judge {props.judges[1].name} Votes
        <button style={{ 'backgroundColor': 'cornflowerblue' }} onClick={( ) => {
          if(!j2Voted){
            setp1Votes(p1Votes + 1)
            setJ2Voted(true)
          } else {
            setp1Votes(p1Votes + 0)
          }
        }
      }>
          <h3>Team: {props.topic1.correct_answer}</h3>
        </button>
        <button style={{ 'backgroundColor': 'darkred' }}onClick={( ) => {
          if(!j2Voted){
            setp2Votes(p2Votes + 1)
            setJ2Voted(true)
          } else {
            setp2Votes(p2Votes + 0)
          }
        }
      }>
          <h3>Team: {props.topic2.correct_answer}</h3>
      </button>
    </section>
    <section className="vote">
    Judge {props.judges[2].name} Votes
        <button style={{ 'backgroundColor': 'cornflowerblue' }} onClick={( ) => {
          if(!j3Voted){
            setp1Votes(p1Votes + 1)
            setJ3Voted(true)
          } else {
            setp1Votes(p1Votes + 0)
          }
        }
      }>
            <h3>Team: {props.topic1.correct_answer}</h3>
          </button>
          <button style={{ 'backgroundColor': 'darkred' }} onClick={( ) => {
            if(!j3Voted){
              setp2Votes(p2Votes + 1)
              setJ3Voted(true)
            } else {
              setp2Votes(p2Votes + 0)
            }
          }
        }>
            <h3>Team: {props.topic2.correct_answer}</h3>
        </button>
    </section>
    </section> 
    {!j1Voted &&
      <h3>Someone Needs to Vote</h3>
    }
    {!j2Voted &&
      <h3>Someone Needs to Vote</h3>
    }
    {!j3Voted &&
      <h3>Someone Needs to Vote</h3>
    }
    {j1Voted && j2Voted && j3Voted &&
      <section>
        <Link to="/winner" onClick={() => {
          props.setVotes([{"p1": p1Votes, "p2": p2Votes}])
        }}>
            Submit Votes
        </Link>
      </section>
    }
    </main>
  )
}


export default Vote

Vote.propTypes = {
  debators:  PropTypes.array,
  judges:  PropTypes.array,
  history: PropTypes.object,
  info: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  setTopic1: PropTypes.func,
  setTopic2: PropTypes.func
}