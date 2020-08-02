import React, {useState, useEffect} from 'react';
import './Nav.scss';
import {Link} from 'react-router-dom'
import {GrStar} from 'react-icons/gr'


function Nav() {
  return(
    <nav>
      <section className="stars">
        {<GrStar />}{<GrStar />}{<GrStar />}
      </section>
      <section aria-label="debatable">
        {'DEBATABLE'}
      </section>
      <section className="stars">
        {<GrStar />}{<GrStar />}{<GrStar />}
      </section>
    </nav>
  )
}


export default Nav