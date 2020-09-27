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

  useEffect(() => {
    localStorage.setItem('ExtraAppTransactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = e => {
    e.preventDefault();
    setTransactions(oldTransactions => [{ id: Math.floor(Math.random() * 9999999999), category, amount, date, type, description }, ...oldTransactions])
    setCategory('');
    setAmount('');
  }

  const sortCategory = e => {
    localStorage.clear();
    const categoryHeader = e.target;
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
    localStorage.clear();
    const dateHeader = e.target;
    const ascending = dateHeader.classList.contains("ascending")

    setTransactions(oldTransactions => {
      let newTransactions = [...oldTransactions];
      if (!ascending) {
        dateHeader.classList.add("ascending");
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

  const handleDelete = id => {
    const newTransactions = transactions.filter(transaction => transaction.id !== id)
    localStorage.clear();
    localStorage.setItem('ExtraAppTransactions', JSON.stringify(newTransactions));
    setTransactions(newTransactions)
  }

  const sortAmount = e => {
    localStorage.clear();
    const amountHeader = e.target;
    const ascending = amountHeader.classList.contains("ascending")

    setTransactions(oldTransactions => {
      let newTransactions = [...oldTransactions];
      if (ascending) {
        amountHeader.classList.remove("ascending")
        return newTransactions.sort((a, b) => b.amount - a.amount);
      } else {
        amountHeader.classList.add("ascending")
        return newTransactions.sort((a, b) => a.amount - b.amount);
      }
    })
    
    localStorage.setItem('ExtraAppTransactions', JSON.stringify(transactions));
  }

  const getAccounts = () => {
    const cashAccounts = JSON.parse(localStorage.getItem('ExtraAppCashAccounts') || JSON.stringify([]))
    const creditAccounts = JSON.parse(localStorage.getItem('ExtraAppCreditAccounts') || JSON.stringify([]))
    const bankAccounts = JSON.parse(localStorage.getItem('ExtraAppBankAccounts') || JSON.stringify([]))
    return [...cashAccounts, ...creditAccounts, ...bankAccounts];
  }
  
  return (
    <div>
      <h2>Transactions</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <select required defaultValue='' name="category" onChange={e => setCategory(e.target.value)}>
          <option disabled value="">Category</option>
          <option value="groceries">Groceries</option>
          <option value="income">Income</option>
          <option value="personal">Personal</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>
        <input required type="number" min='0' step='0.01' value={amount} placeholder="amount" onChange={e => setAmount(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <select required defaultValue='' name="account" onChange={e => setAccount(e.target.value)}>
          <option disabled value="">Choose an account</option>
          {
            getAccounts().map((account, i) => {
              return (
                <option key={i} value={`${account.institution}`}>{account.institution}</option>
              )
            })
          }
        </select>
        <select required defaultValue='' name="type" onChange={e => setType(e.target.value)}>
          <option disabled value="">Select entry type</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input required type="text" value={description} placeholder='Add a description...' onChange={e => setDescription(e.target.value)} />
        <input type="submit" value="Add Transaction" />
      </form>
      <table>
        <thead>
          <tr>
            <th className='category-header' onClick={e => sortCategory(e)}>Category</th>
            <th className='amount-header' onClick={e => sortAmount(e)}>Amount</th>
            <th className='date-header' onClick={e => sortDate(e)}>Date</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} handleDelete={handleDelete} />)
          }
        </tbody>
      </table>
    </div>
  )
}
