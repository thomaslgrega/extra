import React, { useState, useEffect } from 'react';
import { AccountItem } from './AccountItem';

export const Summary = () => {
  const [cashAccounts, setCashAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppCashAccounts') || JSON.stringify([])));
  const [creditAccounts, setCreditAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppCreditAccounts') || JSON.stringify([])));
  const [bankAccounts, setBankAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppBankAccounts') || JSON.stringify([])));

  const [assets, setAssets] = useState(() => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    let total = 0;
    transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        total += parseFloat(transaction.amount);
      }
    })
    
    const availableAccounts = [...cashAccounts, ...creditAccounts, ...bankAccounts];
    availableAccounts.forEach(account => total += parseFloat(account.accountBalance));

    return total;
  })

  const [expense, setExpense] = useState(() => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    let total = 0;
    transactions.forEach(transaction => {
      if (transaction.type === 'expense') {
        total += parseFloat(transaction.amount);
      }
    })

    return total;
  })

  const [balance, setBalance] = useState(assets - expense);
  const [institution, setInstitution] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const [accountCategory, setAccountCategory] = useState('');

  useEffect(() => {
    localStorage.setItem('ExtraAppCashAccounts', JSON.stringify(cashAccounts));
  }, [cashAccounts])

  useEffect(() => {
    localStorage.setItem('ExtraAppCreditAccounts', JSON.stringify(creditAccounts));
  }, [creditAccounts])

  useEffect(() => {
    localStorage.setItem('ExtraAppBankAccounts', JSON.stringify(bankAccounts));
  }, [bankAccounts])

  const handleSubmit = e => {
    e.preventDefault();
    if (accountCategory === 'cash') {
      setCashAccounts(oldAccounts => [{ id: Math.floor(Math.random() * 9999999999), accountCategory, accountBalance, institution }, ...oldAccounts])
    } else if (accountCategory === 'credit') {
      setCreditAccounts(oldAccounts => [{ id: Math.floor(Math.random() * 9999999999), accountCategory, accountBalance, institution }, ...oldAccounts])
    } else {
      setBankAccounts(oldAccounts => [{ id: Math.floor(Math.random() * 9999999999), accountCategory, accountBalance, institution }, ...oldAccounts])
    }
  }

  return (
    <div>
      <h2>Summary</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input required type="text" placeholder="Enter an institution..." value={institution} onChange={e => setInstitution(e.target.value)} />
        <input required type="number" step="0.01" value={accountBalance} onChange={e => setAccountBalance(e.target.value)} />
        <select required defaultValue='' name="accountCategory" onChange={e => setAccountCategory(e.target.value)}>
          <option disabled value="">Select Category</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
          <option value="banks">Bank Account</option>
        </select>
        <input type="submit" value="Add Account" />
      </form>
      <div>
        <div className="balance-container">
          <h4>Balance</h4>
          <h2>${balance.toFixed(2)}</h2>
        </div>
        <div className="assets-container">
          <h4>Assets</h4>
          <h3>${assets.toFixed(2)}</h3>
        </div>
        <div className="expense-container">
          <h4>Expenses</h4>
          <h3>${expense.toFixed(2)}</h3>
        </div>
      </div>
      <div className='accounts-container'>
        <div>
          <div>
            <span>Bank</span>
            <div>
              {
                bankAccounts.map(account => <AccountItem key={account.id} account={account} />)
              }
            </div>
          </div>
          <span>Cash</span>
          <div>
            {
              cashAccounts.map(account => <AccountItem key={account.id} account={account} />)
            }
          </div>
        </div>
        <div>
          <span>Credit</span>
          <div>
            {
              creditAccounts.map(account => <AccountItem key={account.id} account={account} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
