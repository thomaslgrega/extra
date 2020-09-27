import React from 'react'

export const TransactionItem = ({ transaction, handleDelete }) => {
  const checkTypeForAmount = () => {
    if (transaction.type === 'expense') {
      return `-$${(parseFloat(transaction.amount)).toFixed(2)}`;
    } else {
      return `$${(parseFloat(transaction.amount)).toFixed(2)}`
    }
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
