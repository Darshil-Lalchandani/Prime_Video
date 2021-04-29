import React from 'react'
import Logo from '../assets/prime.png'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm text-white fixed-top">
      <a className="navbar-brand ml-4 mt-2" href='/'>
        <img src={Logo} alt='prime-video' height='40px' width='120px'/>
      </a>
      <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><FaBars /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">TV Shows</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Kids</a>
          </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
