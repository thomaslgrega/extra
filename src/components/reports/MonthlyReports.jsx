import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';

export const MonthlyReports = () => {
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
      const transactionMonth = transaction.date.slice(5, 7);
      const transactionYear = transaction.date.slice(0, 4);
      
      if (transactionMonth === date.slice(5, 7) && transactionYear === date.slice(0, 4) && transaction.type === 'expense') {
        total += parseFloat(transaction.amount);
      }
    })

    return formatNumber(total.toFixed(2));
  }

  const getMonth = () => {
    const numDays = new Date(date.slice(0, 4), date.slice(5,7), 0).getDate();
    const monthDays = [];
    for (let i = 1; i <= numDays; i++) {
      if (i.toString().length < 2) {
        monthDays.push(`${date.slice(0, 4)}-${date.slice(5, 7)}-0${i}`)
      } else {
        monthDays.push(`${date.slice(0, 4)}-${date.slice(5, 7)}-${i}`)
      }
    }

    return monthDays;
  }

  const populateData = () => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    const data = [];
    const month = getMonth();
    month.forEach(day => {
      let expenseForDay = 0;
      transactions.forEach(transaction => {
        if (transaction.date === day) {
          expenseForDay += parseFloat(transaction.amount);
        }
      })
      data.push(expenseForDay.toFixed(2));
    })

    return data;
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [date, setDate] = useState(todaysDate);
  const data = {
    labels: getMonth(),
    datasets: [
      {
        label: 'Monthly Expenses',
        fill: true,
        lineTension: 0.2,
        // backgroundColor: 'rgba(12, 238, 99, 1)',
        backgroundColor: 'tomato',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: populateData()
      }
    ]
  }

  return (
    <div className='reports-content'>
      <div className="total-reports-container">
        <h4 className="total-reports-header">Total Monthly Expense</h4>
        <h3 className='reports-total-expenses'>${totalExpenses()}</h3>
      </div>
      <label className='reports-date-label'>Choose a Day</label>
      <input className='reports-date-select' type="date" value={date} onChange={e => setDate(e.target.value)} />
      <div className='line-graph-container'>
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: `Monthly Expense Breakdown`,
              fontSize: 30
            },
            legend: {
              display: false,
            }
          }}
        />
      </div>
    </div>
  )
}
