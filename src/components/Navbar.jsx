import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const expandLogo = () => {
    const firstSpan = document.querySelector('.first-logo-span');
    firstSpan.classList.add('expand');
    const secondSpan = document.querySelector('.second-logo-span');
    secondSpan.classList.add('expand');
  }
  
  const shrinkLogo = () => {
    const firstSpan = document.querySelector('.first-logo-span');
    firstSpan.classList.remove('expand');
    const secondSpan = document.querySelector('.second-logo-span');
    secondSpan.classList.remove('expand');
  }

  return (
    <nav className='main-nav-container'>
      <div className='main-nav-logo'>
        <Link to='/summary' className='logo-container' onMouseEnter={() => expandLogo()} onMouseLeave={() => shrinkLogo()}>
          <span className='first-logo-span'>Expense</span>
          <span className='second-logo-span'>Tracker</span>
        </Link>
      </div>
      <div className='main-nav-bar'>
        <div className="nav-bar-links-container">
          <NavLink className='main-nav-links' activeClassName='nav-active' exact to='/summary'>Summary</NavLink>
          <NavLink className='main-nav-links' activeClassName='nav-active' exact to='/transactions'>Transactions</NavLink>
          <NavLink className='main-nav-links' activeClassName='nav-active' to='/report'>Reports</NavLink>

        </div>
      </div>
    </nav>
  )
}
