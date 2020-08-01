import React, { Component, useState} from 'react';
import usePlayer from '../Hooks/usePlayer'
import './Names.scss';
import {Link} from 'react-router-dom'

class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  handleSubmit = () => {
    const {p1, p2, p3, p4, p5} = this.state
    this.props.setPlayers([{"name": p1, "id": 1}, {"name": p2, "id": 2}, {"name": p3, "id": 3 }, {"name": p4, "id": 4}, {"name": p5, "id": 5}])
  }

  render() {
    const {p1, p2, p3, p4, p5} = this.state
    return (
      <form className="names">
        <input
          aria-label="player-one"
          type="text"
          name="p1"
          value={p1}
          placeholder="Player One"
          onChange={this.handleChange}
        />
        <input
          aria-label="player-two"
          type="text"
          name="p2"
          value={p2}
          placeholder="Player Two"
          onChange={this.handleChange}
          />
        <input
          aria-label="player-three"
          type="text"
          name="p3"
          value={p3}
          placeholder="Player Three"
          onChange={this.handleChange}
          />
        <input
          aria-label="player-four"
          type="text"
          name="p4"
          value={p4}
          placeholder="Player Four"
          onChange={this.handleChange}
          />
        <input 
          aria-label="player-five"
          type="text"
          name="p5"
          value={p5}
          placeholder="Player Five"
          onChange={this.handleChange}
          />
        <Link to="/debate" onClick={this.handleSubmit}>BEGIN!</Link>
      </form>
    )
  }
}

export default Names