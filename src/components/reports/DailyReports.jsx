import React, { useState } from 'react'

export const DailyReports = () => {
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

  const totalExpenses = () => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    let total = 0;
    transactions.forEach(transaction => {
      if (transaction.date === date) {
        total += parseFloat(transaction.amount);
      }
    })

    return total.toFixed(2);
  }

  const [date, setDate] = useState(todaysDate);

  return (
    <div>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <span>${totalExpenses()}</span>
    </div>
  )
}
