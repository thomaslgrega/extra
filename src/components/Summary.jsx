import React from 'react'

export const Summary = () => {
  return (
    <div>
      <div>
        <div className="balance-container">
          <h4>Balance</h4>
          <h2>$500.00</h2>
        </div>
        <div className="income-container">
          <h4>Income</h4>
          <h3>$600.00</h3>
        </div>
        <div className="expense-container">
          <h4>Expense</h4>
          <h3>$100.00</h3>
        </div>
      </div>
      <ul className='accounts-container'>
        <li>Cash</li>
        <li>Credit</li>
        <li>Miscellaneous</li>
      </ul>
    </div>
  )
}
