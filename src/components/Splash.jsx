import React from 'react'
import { Link } from 'react-router-dom'

export const Splash = () => {
  return (
    <div>
      <h1 className='splash-header'>Take control of your Expenses</h1>
      <div className='splash-first-container'>
        <div className='first-container-left-text'>
          <span className='first-container-span'>Have us keep track of all of your transactions. You just enjoy yourself.</span>
          <span className='first-container-span'>Your one stop app for making better finance decisions for the rest of your life.</span>
          <span className="first-container-span">Free and open for all. There's no risk. Give it a try.</span>
          <Link to='/summary' className="splash-try-btn">Try for free</Link>
        </div>
        <div className='first-container-image'></div>
      </div>
      <div className='splash-second-container'>
        <div className='card-container'>
          <div className='second-container-card'>
            <i className="fas fa-chart-pie"></i>
            <span className='card-spans-title'>Visualize</span>
            <span className='card-spans'>Visually see your spending with pie charts and line graphs</span>
          </div>
          <div className='second-container-card'>
            <i className="fas fa-table"></i>
            <span className='card-spans-title'>Tabulate</span>
            <span className="card-spans">Arrange your transactions in an easy to organize table</span>
          </div>
          <div className='second-container-card'>
            <i className="fas fa-money-bill"></i>
            <span className="card-spans-title">Take Control</span>
            <span className="card-spans">Use the data we provide you to make better decisions</span>
          </div>
        </div>
      </div>
    </div>
  )
}
