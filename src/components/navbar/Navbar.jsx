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
      <div className='nav-item'><a className='nav-a' href={homeUrl}>HOME</a></div>
      <div className='nav-item'><a className='nav-a' href="/#about">ABOUT</a></div>
      <div className='nav-item'><a className='nav-a' href="/#events">EVENTS</a></div>
      <div className='nav-item'><a className='nav-a' href="/#gallery">GALLERY</a></div>
      <div className='nav-item team sponsors'><a className='nav-a team' href="/#sponsors">SPONSORS</a></div>
      <Link to={'/team'}> 
          <div className='nav-item team'><a className='nav-a team' href="/team">OUR TEAM</a></div>
        </Link>
        
        
        
        
        
      </nav>
      
    </>
  )
}

