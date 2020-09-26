import React from 'react'

export const TransactionItem = ({ transaction }) => {
  const renderAmount = () => {
    if (transaction.amount < 0) {
      return (
        <td className='negative'>-${Math.abs(transaction.amount).toFixed(2)}</td>
      )
    } else {
      return (
        <td className='positive'>${parseFloat(transaction.amount).toFixed(2)}</td>
      )
    }
  }

  return (
    <tr>
      <td>{transaction.category}</td>
      {renderAmount()}
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
    </tr>
  )
}
