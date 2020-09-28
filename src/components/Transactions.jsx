import React, { useState, useEffect } from 'react'
import { TransactionItem } from './TransactionItem';

export const Transactions = () => {
  const todaysDate = () => {
    let [month, day, year] = new Date().toLocaleDateString().split('/');
    if (month.length === 1) {
      month = `0${month}`
    }

    if (day.length === 1) {
      month = `0${day}`
    }
    return `${year}-${month}-${day}`
  }

  const [transactions, setTransactions] = useState(() => {
    const initial = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))

    return initial.sort(function (a, b) {
      if (a.date > b.date) { return -1; }
      if (a.date < b.date) { return 1; }
      return 0;
    });

  });

  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(todaysDate);
  const [description, setDescription] = useState('');
  const [account, setAccount] = useState('');
  const [type, setType] = useState('');

  const [cashAccounts, setCashAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppCashAccounts') || JSON.stringify([])));
  const [creditAccounts, setCreditAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppCreditAccounts') || JSON.stringify([])));
  const [bankAccounts, setBankAccounts] = useState(JSON.parse(localStorage.getItem('ExtraAppBankAccounts') || JSON.stringify([])));

  useEffect(() => {
    localStorage.setItem('ExtraAppTransactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('ExtraAppCashAccounts', JSON.stringify(cashAccounts));
  }, [cashAccounts]);

  useEffect(() => {
    localStorage.setItem('ExtraAppCreditAccounts', JSON.stringify(creditAccounts));
  }, [creditAccounts]);

  useEffect(() => {
    localStorage.setItem('ExtraAppBankAccounts', JSON.stringify(bankAccounts));
  }, [bankAccounts]);

  const handleSubmit = e => {
    e.preventDefault();
    setTransactions(oldTransactions => [{ id: Math.floor(Math.random() * 9999999999), category, amount, date, type, description, account }, ...oldTransactions])
    setCategory('');
    setAmount('');

    cashAccounts.forEach(cashAccount =>  {
      if (cashAccount.institution === account) {
        if (type === 'income') {
          cashAccount.accountBalance = parseInt(cashAccount.accountBalance) + parseInt(amount);
          setCashAccounts(cashAccounts.slice());
        } else {
          cashAccount.accountBalance = parseInt(cashAccount.accountBalance) - parseInt(amount);
          setCashAccounts(cashAccounts.slice());
        }
      }
    })

    creditAccounts.forEach(creditAccount => {
      if (creditAccount.institution === account) {
        if (type === 'income') {
          creditAccount.accountBalance = parseInt(creditAccount.accountBalance) + parseInt(amount);
          setCreditAccounts(creditAccounts.slice());
        } else {
          creditAccount.accountBalance = parseInt(creditAccount.accountBalance) - parseInt(amount);
          setCreditAccounts(creditAccounts.slice());
        }
      }
    })

    bankAccounts.forEach(bankAccount => {
      if (bankAccount.institution === account) {
        if (type === 'income') {
          bankAccount.accountBalance = parseInt(bankAccount.accountBalance) + parseInt(amount);
          setBankAccounts(bankAccounts.slice());
        } else {
          bankAccount.accountBalance = parseInt(bankAccount.accountBalance) - parseInt(amount);
          setBankAccounts(bankAccounts.slice());
        }
      }
    })
  }

  const sortAccount = e => {
    const accountHeader = e.target;
    const amountHeader = document.querySelector('.amount-header')
    const dateHeader = document.querySelector('.date-header')
    const categoryHeader = document.querySelector('.category-header');
    const ascending = accountHeader.classList.contains("ascending")

    setTransactions(oldTransactions => {
      let newTransactions = [...oldTransactions];
      if (ascending) {
        accountHeader.classList.remove("ascending");
        return newTransactions.sort(function (a, b) {
          if (a.account > b.account) { return -1; }
          if (a.account < b.account) { return 1; }
          return 0;
        });
      } else {
        accountHeader.classList.add("ascending");
        categoryHeader.classList.remove("ascending");
        amountHeader.classList.remove("ascending");
        dateHeader.classList.remove("ascending");
        return newTransactions.sort(function (a, b) {
          if (a.account < b.account) { return -1; }
          if (a.account > b.account) { return 1; }
          return 0;
        });
      }
    })

    localStorage.setItem('ExtraAppTransactions', JSON.stringify(transactions));
  }

  const sortCategory = e => {
    const categoryHeader = e.target;
    const amountHeader = document.querySelector('.amount-header')
    const dateHeader = document.querySelector('.date-header')
    const accountHeader = document.querySelector('.account-header')
    const ascending = categoryHeader.classList.contains("ascending")

    setTransactions(oldTransactions => {
      let newTransactions = [...oldTransactions];
      if (ascending) {
        categoryHeader.classList.remove("ascending");
        return newTransactions.sort(function (a, b) {
          if (a.category > b.category) { return -1; }
          if (a.category < b.category) { return 1; }
          return 0;
        });
      } else {
        categoryHeader.classList.add("ascending");
        amountHeader.classList.remove("ascending");
        dateHeader.classList.remove("ascending");
        accountHeader.classList.remove("ascending");
        return newTransactions.sort(function (a, b) {
          if (a.category < b.category) { return -1; }
          if (a.category > b.category) { return 1; }
          return 0;
        });
      }
    })

    localStorage.setItem('ExtraAppTransactions', JSON.stringify(transactions));
  }

  const sortDate = e => {
    const dateHeader = e.target;
    const amountHeader = document.querySelector('.amount-header')
    const categoryHeader = document.querySelector('.category-header')
    const accountHeader = document.querySelector('.account-header')
    const ascending = dateHeader.classList.contains("ascending")

    setTransactions(oldTransactions => {
      let newTransactions = [...oldTransactions];
      if (!ascending) {
        dateHeader.classList.add("ascending");
        amountHeader.classList.remove("ascending")
        categoryHeader.classList.remove("ascending")
        accountHeader.classList.remove("ascending");
        return newTransactions.sort(function (a, b) {
          if (a.date < b.date) { return -1; }
          if (a.date > b.date) { return 1; }
          return 0;
        });
      } else {
        dateHeader.classList.remove("ascending");
        return newTransactions.sort(function (a, b) {
          if (a.date > b.date) { return -1; }
          if (a.date < b.date) { return 1; }
          return 0;
        });
      }
    })

    localStorage.setItem('ExtraAppTransactions', JSON.stringify(transactions));
  }

  const sortAmount = e => {
    const amountHeader = e.target;
    const categoryHeader = document.querySelector('.category-header')
    const dateHeader = document.querySelector('.date-header')
    const accountHeader = document.querySelector('.account-header')
    const ascending = amountHeader.classList.contains("ascending")

    setTransactions(oldTransactions => {
      let incomeTransactions = oldTransactions.filter(transaction => transaction.type === 'income');
      let expenseTransactions = oldTransactions.filter(transaction => transaction.type === 'expense');
      if (ascending) {
        amountHeader.classList.remove("ascending")
        incomeTransactions.sort((a, b) => b.amount - a.amount);
        expenseTransactions.sort((a, b) => b.amount - a.amount);
        return [...incomeTransactions, ...expenseTransactions];
      } else {
        amountHeader.classList.add("ascending")
        categoryHeader.classList.remove("ascending")
        dateHeader.classList.remove("ascending")
        accountHeader.classList.remove("ascending");
        incomeTransactions.sort((a, b) => a.amount - b.amount);
        expenseTransactions.sort((a, b) => a.amount - b.amount);
        return [...expenseTransactions, ...incomeTransactions]
      }
    })
    
    localStorage.setItem('ExtraAppTransactions', JSON.stringify(transactions));
  }

  const handleDelete = id => {
    let transactionToDelete;
    const newTransactions = [];
    transactions.forEach(transaction => {
      if (transaction.id === id) {
        transactionToDelete = transaction;
      } else {
        newTransactions.push(transaction);
      }
    })

    cashAccounts.forEach(cashAccount => {
      if (cashAccount.institution === transactionToDelete.account) {
        if (transactionToDelete.type === 'income') {
          cashAccount.accountBalance = parseInt(cashAccount.accountBalance) - parseInt(transactionToDelete.amount);
          setCashAccounts(cashAccounts.slice());
        } else {
          cashAccount.accountBalance = parseInt(cashAccount.accountBalance) + parseInt(transactionToDelete.amount);
          setCashAccounts(cashAccounts.slice());
        }
      }
    })

    creditAccounts.forEach(creditAccount => {
      if (creditAccount.institution === transactionToDelete.account) {
        if (transactionToDelete.type === 'income') {
          creditAccount.accountBalance = parseInt(creditAccount.accountBalance) - parseInt(transactionToDelete.amount);
          setCreditAccounts(creditAccounts.slice());
        } else {
          creditAccount.accountBalance = parseInt(creditAccount.accountBalance) + parseInt(transactionToDelete.amount);
          setCreditAccounts(creditAccounts.slice());
        }
      }
    })

    bankAccounts.forEach(bankAccount => {
      if (bankAccount.institution === transactionToDelete.account) {
        if (transactionToDelete.type === 'income') {
          bankAccount.accountBalance = parseInt(bankAccount.accountBalance) - parseInt(transactionToDelete.amount);
          setBankAccounts(bankAccounts.slice());
        } else {
          bankAccount.accountBalance = parseInt(bankAccount.accountBalance) + parseInt(transactionToDelete.amount);
          setBankAccounts(bankAccounts.slice());
        }
      }
    })
    
    // const newTransactions = transactions.filter(transaction => transaction.id !== id)
    // localStorage.setItem('ExtraAppTransactions', JSON.stringify(newTransactions));
    setTransactions(newTransactions)
  }

  const getAccounts = () => {
    const cashAccounts = JSON.parse(localStorage.getItem('ExtraAppCashAccounts') || JSON.stringify([]))
    const creditAccounts = JSON.parse(localStorage.getItem('ExtraAppCreditAccounts') || JSON.stringify([]))
    const bankAccounts = JSON.parse(localStorage.getItem('ExtraAppBankAccounts') || JSON.stringify([]))
    return [...cashAccounts, ...creditAccounts, ...bankAccounts];
  }

  const closeModal = e => {
    const formContainer = document.querySelector('.transactions-form-container');
    if (e.target === e.currentTarget) {
      formContainer.classList.remove('open')
    }
  }

  const openModal = () => {
    const formContainer = document.querySelector('.transactions-form-container');
    formContainer.classList.add('open')
  }
  
  return (
    <div className='transactions-content'>
      <h2 className='transactions-header'>Transactions</h2>
      <span className='add-transaction-btn' onClick={openModal}>Add Transaction</span>
      <div className='transactions-form-container' onClick={e => closeModal(e)}>
        <form className='transactions-form' onSubmit={e => handleSubmit(e)}>
          <div className='transaction-form-title-container'>
            <h2 className='transaction-form-title'>Add a Transaction</h2>
          </div>
          <select className='transactions-inputs' required defaultValue='' name="account" onChange={e => setAccount(e.target.value)}>
            <option disabled value="">Choose an account</option>
            {
              getAccounts().map((account, i) => {
                return (
                  <option key={i} value={`${account.institution}`}>{account.institution}</option>
                )
              })
            }
          </select>
          <select className='transactions-inputs' required defaultValue='' name="category" onChange={e => setCategory(e.target.value)}>
            <option disabled value="">Category</option>
            <option value="groceries">Groceries</option>
            <option value="income">Income</option>
            <option value="personal">Personal</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
          <div className='transaction-input-container'>
            <label>Transaction Amount</label>
            <input className='transactions-inputs' required type="number" min='0' step='0.01' value={amount} placeholder="amount" onChange={e => setAmount(e.target.value)} />
          </div>
          <div className='transaction-input-container'>
            <label>Transaction Date</label>
            <input className='transactions-inputs transactions-date-input' type="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <select className='transactions-inputs' required defaultValue='' name="type" onChange={e => setType(e.target.value)}>
            <option disabled value="">Select entry type</option>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <div className='transaction-input-container'>
            <label>Description</label>
            <input className='transactions-inputs' required type="text" value={description} placeholder='Add a description...' onChange={e => setDescription(e.target.value)} />
          </div>
          <div className='transactions-button-containers'>
            <input className='transactions-submit-btn' type="submit" value="Add Transaction" />
            <span className='transactions-cancel-btn' onClick={e => closeModal(e)}>Cancel</span>
          </div>
        </form>
      </div>
      <div className='transactions-table-container'>
        <table className='transactions-table'>
          <thead>
            <tr>
              <th className='table-header account-header' onClick={e => sortAccount(e)}><i className="fas fa-sort"></i>Account</th>
              <th className='table-header category-header' onClick={e => sortCategory(e)}><i className="fas fa-sort"></i>Category</th>
              <th className='table-header amount-header' onClick={e => sortAmount(e)}><i className="fas fa-sort"></i>Amount</th>
              <th className='table-header date-header' onClick={e => sortDate(e)}><i className="fas fa-sort"></i>Date</th>
              <th className='table-header'>Description</th>
              <th className='table-header'>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} handleDelete={handleDelete} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
