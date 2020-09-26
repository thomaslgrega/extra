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

  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem('mintbeanExtraApp') || JSON.stringify([])))
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(todaysDate);
  const [description, setDescription] = useState('');

  useEffect(() => {
    localStorage.setItem('mintbeanExtraApp', JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = e => {
    e.preventDefault();
    setTransactions(oldTransactions => [{ id: Math.floor(Math.random() * 9999999999), category, amount, date, description }, ...oldTransactions])
    setCategory('');
    setAmount('');
  }
  
  return (
    <div>
      <h2>Transactions</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <select required defaultValue='' name="category" onChange={e => setCategory(e.target.value)}>
          <option disabled value="">Category</option>
          <option value="groceries">Groceries</option>
          <option value="personal">Personal</option>
          <option value="utilities">Utilities</option>
          <option value="other">Other</option>
        </select>
        <input required type="number" step='0.01' value={amount} placeholder="amount" onChange={e => setAmount(e.target.value)}/>
        <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
        <input required type="text" value={description} placeholder='Add a description...' onChange={e => setDescription(e.target.value)}/>
        <input type="submit" value="Add Transaction"/>
      </form>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)
          }
        </tbody>
      </table>
    </div>
  )
}
