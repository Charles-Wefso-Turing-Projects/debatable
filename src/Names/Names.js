import React, {useState} from 'react';
import usePlayer from '../Hooks/usePlayer'
import './Names.scss';
import {Link} from 'react-router-dom'

function Names(props) {
  const [p1, setP1] = useState("")
  const [p2, setP2] = useState("")
  const [p3, setP3] = useState("")
  const [p4, setP4] = useState("")
  const [p5, setP5] = useState("")

  const nameP1 = (e) => {
   const { value } = e.target
   setP1(value)
  }
  const nameP2 = (e) => {
    const { value } = e.target
    setP2(value)
   }

   const nameP3 = (e) => {
    const { value } = e.target
    setP3(value)
   }

   const nameP4 = (e) => {
    const { value } = e.target
    setP4(value)
   }

   const nameP5 = (e) => {
    const { value } = e.target
    setP5(value)
   }


  const handleSubmit = () => {
    props.setPlayers([{"name": p1, "id": 1}, {"name": p2, "id": 2}, {"name": p3, "id": 3 }, {"name": p4, "id": 4}, {"name": p5, "id": 5}])
  }

  return (
    <form className="names">
      <input
        aria-label="player-one"
        type="text"
        name="P1"
        value={p1}
        placeholder="Player One"
        onChange={nameP1}
      />
      <input
        aria-label="player-two"
        type="text"
        name="P2"
        value={p2}
        placeholder="Player Two"
        onChange={nameP2}
        />
      <input
        aria-label="player-three"
        type="text"
        name="P3"
        value={p3}
        placeholder="Player Three"
        onChange={nameP3}
        />
      <input
        aria-label="player-four"
        type="text"
        name="P4"
        value={p4}
        placeholder="Player Four"
        onChange={nameP4}
        />
      <input 
        aria-label="player-five"
        type="text"
        name="P5"
        value={p5}
        placeholder="Player Five"
        onChange={nameP5}
        />
      <Link to="/debate" onClick={handleSubmit}>BEGIN!</Link>
    </form>
  )
}

export default Names