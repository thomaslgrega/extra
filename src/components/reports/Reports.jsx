import React from 'react'
import { NavLink } from 'react-router-dom'
import { DailyReports } from './DailyReports';

export const Reports = () => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <div>
        <NavLink activeClassName='reports-nav-active' exact to='/report/daily'>Daily</NavLink>
        <NavLink activeClassName='reports-nav-active' exact to='/report/week'>Week</NavLink>
        <NavLink activeClassName='reports-nav-active' exact to='/report/month'>Month</NavLink>
      </div>
    </div>
  )
}
