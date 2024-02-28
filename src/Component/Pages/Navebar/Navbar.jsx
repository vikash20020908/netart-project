import React from 'react'
import "./navbar.css"
import logo from "../../IMages/logo.png"
export default function Navbar() {
  return (
    <div className='NM' >
      <div className='LD' >
        <img src={logo} alt='logo'/>
      </div>
    </div>
  )
}
