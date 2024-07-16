import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Navbar1.css"

const Navbar1 = () => {
  return (
    
    <nav>
      <Link to="/">Blogapp</Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/addblog">Add</NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar1
