import React from 'react';
import { NavLink } from 'react-router-dom';
import NavStyle from './Nav.module.css';

const navClass = function(){
  return(
    navData => navData.isActive ? NavStyle.active : NavStyle.link
  )
}


const Nav = () => {
    return(
        <nav className='nav'>
            <div className={NavStyle.item}>
              <NavLink className={navClass()} to="/profile">Profile</NavLink>
            </div>
            <div className={NavStyle.item}>
              <NavLink className={navClass()} to="/news">News</NavLink>
            </div>
            <div className={NavStyle.item}>
              <NavLink className={navClass()} to="/messages">Messages</NavLink>
            </div>
            <div className={NavStyle.item}>
              <NavLink className={navClass()} to="/music">Music</NavLink>
            </div>
            <div className={NavStyle.item}>
              <NavLink className={navClass()} to="/settings">Settings</NavLink>
            </div>
      </nav>
    )
}

export default Nav;