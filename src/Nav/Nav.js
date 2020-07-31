import React, {useState, useEffect} from 'react';
import ReactCountdownClock from 'react-countdown-clock'
import usePlayer from '../Hooks/usePlayer'
import './Nav.scss';
import {Link} from 'react-router-dom'
import {GrStar} from 'react-icons/gr'


function Nav() {
  return(
    <nav>
      <section className="stars">
        {<GrStar />}{<GrStar />}{<GrStar />}
      </section>
        {'DEBATABLE'}
      <section className="stars">
        {<GrStar />}{<GrStar />}{<GrStar />}
      </section>
    </nav>
  )
}


export default Nav