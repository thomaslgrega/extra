import React from 'react'

export const TransactionItem = ({ transaction, handleDelete }) => {
  const checkTypeForAmount = () => {
    if (transaction.type === 'expense') {
      return `-$${formatNumber((parseFloat(transaction.amount)).toFixed(2))}`;
    } else {
      return `$${formatNumber((parseFloat(transaction.amount)).toFixed(2))}`
    }
  }

  const handleEdit = () => {

  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <tr className='transactions-table-row'>
      <td className='transactions-table-data' >{transaction.account}</td>
      <td className='transactions-table-data' >{transaction.category}</td>
      <td className={`${transaction.type} transactions-table-data`}>{checkTypeForAmount()}</td>
      <td className='transactions-table-data' >{transaction.date}</td>
      <td className='transactions-table-data' >{transaction.description}</td>
      <td className='transactions-table-data' ><i className="fas fa-trash-alt" onClick={() => handleDelete(transaction.id)}></i></td>
    </tr>
  )
}
