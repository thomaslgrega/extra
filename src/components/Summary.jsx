import React, { useState, useEffect } from 'react';
import { AccountItem } from './AccountItem';

export const Summary = () => {
  const [cashAccounts, setCashAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppCashAccounts') || JSON.stringify([])));
  const [creditAccounts, setCreditAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppCreditAccounts') || JSON.stringify([])));
  const [bankAccounts, setBankAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppBankAccounts') || JSON.stringify([])));

  // const [assets, setAssets] = useState(() => {
  //   const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
  //   let total = 0;
  //   transactions.forEach(transaction => {
  //     if (transaction.type === 'income') {
  //       total += parseFloat(transaction.amount);
  //     }
  //   })
    
  //   const availableAccounts = [...cashAccounts, ...creditAccounts, ...bankAccounts];
  //   availableAccounts.forEach(account => total += parseFloat(account.accountBalance));

  //   return total;
  // })
  const [balance, setBalance] = useState(() => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    let total = 0;

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

  // const [balance, setBalance] = useState(assets - expense);
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

    setBalance(parseFloat(balance) + parseFloat(accountBalance));
    setInstitution('');
    setAccountBalance(0);
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const openModal = () => {
    const formContainer = document.querySelector('.summary-form-container');
    formContainer.classList.add('open')
  }

  const closeModal = e => {
    const formContainer = document.querySelector('.summary-form-container');
    if (e.target === e.currentTarget) {
      formContainer.classList.remove('open')
    }
  }

  return (
    <div className="summary-content">
      <h2 className="summary-header">Summary</h2>
      <div className='summary-form-container' onClick={e => closeModal(e)}>
        <form className='summary-form' onSubmit={e => handleSubmit(e)}>
          <div className='summary-form-title-container'>
            <h2 className='summary-form-title'>Add an Account</h2>
          </div>
          <div className='summary-input-container'>
            <label>Account Name</label>
            <input className='summary-inputs first-input' required type="text" placeholder="Enter account name..." value={institution} onChange={e => setInstitution(e.target.value)} />
          </div>
          <div className='summary-input-container'>
            <label>Account Balance</label>
            <input className='summary-inputs' required type="number" step="0.01" value={accountBalance} onChange={e => setAccountBalance(e.target.value)} />
          </div>
          <select className='summary-inputs select-input' required defaultValue='' name="accountCategory" onChange={e => setAccountCategory(e.target.value)}>
            <option disabled value="">Select Category</option>
            <option value="cash">Cash</option>
            <option value="banks">Bank Account</option>
            <option value="credit">Credit</option>
          </select>
          <div className='summary-button-containers'>
            <input className='summary-submit-btn' type="submit" value="Add Account" />
            <span className='summary-cancel-btn'>Cancel</span>
          </div>
        </form>
      </div>
      <div className='summary-overview-container'>
        <div className='balance-expense-container'>
          <div className="balance-container">
            <h4 className='summary-title'>Balance</h4>
            <h3 className='balance-total'>${formatNumber(balance.toFixed(2))}</h3>
          </div>
          <div className="expense-container">
            <h4 className='summary-title'>Expenses</h4>
            <h3 className='expenses-total'>${formatNumber(expense.toFixed(2))}</h3>
          </div>
        </div>
      </div>
      <hr className='hr-divider'/>
      <div className='accounts-container'>
        <div className="accounts-container-header">
          <h3 className='account-header'>Accounts</h3>
          <span className='add-account-btn' onClick={openModal}>Add Account</span>
        </div>
        <div>
          <span className='account-type-header'>Cash</span>
          <div>
            {
              cashAccounts.map((account, i) => <AccountItem key={account.id} index={i} formatNumber={formatNumber} account={account} />)
            }
            {cashAccounts.length === 0 ? <div className='empty-account-message'>You don't have any cash accounts currently. Click "Add Account" to add one.</div> : null}
          </div>
          <span className='account-type-header'>Bank</span>
          <div>
            {
              bankAccounts.map((account, i) => <AccountItem key={account.id} index={i} formatNumber={formatNumber} account={account} />)
            }
            {bankAccounts.length === 0 ? <div className='empty-account-message'>You don't have any bank accounts currently. Click "Add Account" to add one.</div> : null}
          </div>
        </div>
        <div>
          <span className='account-type-header'>Credit</span>
          <div>
            {
              creditAccounts.map((account, i) => <AccountItem key={account.id} index={i} formatNumber={formatNumber} account={account} />)
            }
            {creditAccounts.length === 0 ? <div className='empty-account-message'>You don't have any credit accounts currently. Click "Add Account" to add one.</div> : null}

          </div>
        </div>
      </div>
    </div>
  )
}
