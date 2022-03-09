import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
export default function Navbar() {
  return (
    <div id='navbar'> 
      <Link to="/Login">Login </Link>
      <Link to="/">Home </Link>
      <Link to="/Books">Books</Link>


      </div>
  )
}
