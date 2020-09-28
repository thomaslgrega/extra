import React from 'react'
import { NavLink } from 'react-router-dom'
import { DailyReports } from './DailyReports';

export const Reports = () => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className='reports-nav-links-container'>
      <div className='reports-nav-links'>
        <NavLink className='report-nav-link' activeClassName='reports-nav-active' exact to='/report'>Daily</NavLink>
        <NavLink className='report-nav-link' activeClassName='reports-nav-active' exact to='/report/week'>Week</NavLink>
        <NavLink className='report-nav-link' activeClassName='reports-nav-active' exact to='/report/month'>Month</NavLink>
      </div>
    </div>
  )
}
