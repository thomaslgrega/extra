import React from 'react'

export const AccountItem = ({ account }) => {
  return (
    <div>
      <div>{account.institution}</div>
      <div>${account.accountBalance}</div>
    </div>
  )
}
