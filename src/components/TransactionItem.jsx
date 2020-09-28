import React from 'react'

export const TransactionItem = ({ transaction, handleDelete }) => {
  const checkTypeForAmount = () => {
    if (transaction.type === 'expense') {
      return `-$${formatNumber((parseFloat(transaction.amount)).toFixed(2))}`;
    } else {
      return `$${formatNumber((parseFloat(transaction.amount)).toFixed(2))}`
    }
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <tr>
      <td>{transaction.category}</td>
      <td className={`${transaction.type}`}>{checkTypeForAmount()}</td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td onClick={() => handleDelete(transaction.id)}>Delete</td>
    </tr>
  )
}
