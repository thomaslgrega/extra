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
        <NavLink className='main-nav-links' activeClassName='nav-active' exact to='/summary'>Summary</NavLink>
        <NavLink className='main-nav-links' activeClassName='nav-active' exact to='/transactions'>Transactions</NavLink>
        <NavLink className='main-nav-links' activeClassName='nav-active' exact to='/report/daily'>Reports</NavLink>
      </div>
    </nav>
  )
}
