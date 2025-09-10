import React from 'react'
import navstyle from './nav.module.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    
      <div className={navstyle.maindiv}>
        <NavLink to='/' className={({isActive}) => (isActive ? navstyle.manage : navstyle.nomanage )}> Password Manager  </NavLink>
       <NavLink to='/password_generator' className={({isActive}) => (isActive ? navstyle.ganerate : navstyle.noganerate)} >Password Ganerator </NavLink>
      </div>
    </>
  )
}

export default Nav
