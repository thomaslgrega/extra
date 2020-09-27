import React from 'react'
import { NavLink } from 'react-router-dom'
import { DailyReports } from './DailyReports';

export const Reports = () => {
  const getWeek = () => {
  }

  return (
    <div>
      <div>
        <NavLink activeClassName='reports-nav-active' exact to='/report/daily'>Daily</NavLink>
        <NavLink activeClassName='reports-nav-active' exact to='/report/week'>Week</NavLink>
        <NavLink activeClassName='reports-nav-active' exact to='/report/month'>Month</NavLink>
        {/* {DailyReports()} */}
      </div>
    </div>
  )
}
