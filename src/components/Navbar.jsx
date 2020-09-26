import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink activeClassName='nav-active' exact to='/summary'>Summary</NavLink>
        <NavLink activeClassName='nav-active' exact to='/transactions'>Transactions</NavLink>
      </ul>
    </nav>
  )
}
