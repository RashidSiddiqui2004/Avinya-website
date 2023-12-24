import React from 'react'
import Ham from './Ham' 
import './Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar({homeUrl}) {
  return (
    <>
      <div className='ham'>
        <Ham homeUrl={'/'}/>

      </div>
      <nav className='nav'>
        <Link to={'/team'}> 
          <a className='nav-a' href="/team"><div className='nav-item'>OUR TEAM</div></a>
        </Link>
        <a className='nav-a' href="/#sponsors"><div className='nav-item'>SPONSORS</div></a>
        <a className='nav-a' href="/#gallery"><div className='nav-item'>GALLERY</div></a>
        <a className='nav-a' href="/#events"><div className='nav-item'>EVENTS</div></a>
        <a className='nav-a' href="/#about"><div className='nav-item'>ABOUT</div></a>
        <a className='nav-a' href={homeUrl}><div className='nav-item'>HOME</div></a>
      </nav>
      <nav className="nav-2">
      </nav>
    </>
  )
}

