import React from 'react'

export const AccountItem = ({ account, formatNumber, index }) => {
  const checkIndex = () => {
    return index % 2 === 0 ? 'even' : 'odd'
  }

  return (
    <div className={`account-item-container color-${checkIndex()}`}>
      <div className='institution-name'>{account.institution}</div>
      <div>${formatNumber(parseFloat(account.accountBalance).toFixed(2))}</div>
    </div>
  )
}
