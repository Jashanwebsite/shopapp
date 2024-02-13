import React from 'react';
import carsvg from "../svg/Cart.jsx"
import "../css/Navbar.css"
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav class="mask">
  <Link to="/home"></Link>
  <ul class="list">
    <li><Link to="/">{carsvg}</Link></li>
    <li><Link to="/home">Projects</Link></li>
    <li><Link to="/home">News</Link></li>
    <li><Link to="/home">Contact</Link></li>
  </ul>
  <button class="search">Search</button>
  <button class="menu">Menu</button>
</nav>
  )
}

export default Nav
