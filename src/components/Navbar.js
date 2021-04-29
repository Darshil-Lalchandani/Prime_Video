import React, { useState } from 'react'
import Logo from '../assets/prime.png'
import { FaBars, FaSistrix, FaUser } from 'react-icons/fa'

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <nav className="navbar navbar-expand-sm text-white fixed-top">
      <a className="navbar-brand ml-4 mt-2" href='/'>
        <img src={Logo} alt='prime-video' height='40px' width='120px'/>
      </a>
      <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><FaBars /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent parent">
        <ul className="navbar-nav child1">
          <li className={currentPage === 'home' ? 'active nav-item' : 'nav-item'}>
            <a className="nav-link text-white" href="#" onClick={() => setCurrentPage('home')}>Home</a>
          </li>
          <li className={currentPage === 'tv-shows' ? 'active nav-item' : 'nav-item'}>
            <a className="nav-link text-white" href="#" onClick={() => setCurrentPage('tv-shows')}>TV Shows</a>
          </li>
          <li className={currentPage === 'movies' ? 'active nav-item' : 'nav-item'}>
            <a className="nav-link text-white" href="#" onClick={() => setCurrentPage('movies')}>Movies</a>
          </li>
          <li className={currentPage === 'kids' ? 'active nav-item' : 'nav-item'}>
            <a className="nav-link text-white" href="#" onClick={() => setCurrentPage('kids')}>Kids</a>
          </li>
        </ul>
        <ul className='navbar-right ml-auto child2'>
        <form className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text"><FaSistrix /></div>
            </div>
          <input className="form-control mr-sm-2 mt-4 text-white" type="search" placeholder="Search" aria-label="Search" />
          </div>
        <FaUser className="userIcon"/>
        <p className="userName">Test</p>
        </form>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
