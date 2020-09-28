import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2';

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

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const totalExpenses = () => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    let total = 0;
    transactions.forEach(transaction => {
      if (transaction.date === date && transaction.type === "expense") {
        total += parseFloat(transaction.amount);
      }
    })

    return formatNumber(total.toFixed(2));
  }

  const dailyBreakdown = () => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    const categories = ['Groceries', 'Personal', 'Utilities', 'Entertainment', 'Other'];
    const breakdown = [];
    categories.forEach(category => {
      let total = 0;
      transactions.forEach(transaction => {
        if (transaction.category === category.toLowerCase() && transaction.date === date && transaction.type === 'expense') {
          total += parseFloat(transaction.amount);
        }
      })
      breakdown.push(total.toFixed(2));
    })

    return breakdown;
  }

  const [date, setDate] = useState(todaysDate);
  const data = {
    labels: ['Groceries', 'Income', 'Personal', 'Utilities', 'Entertainment', 'Other'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#f94144',
          '#f3722c',
          '#277da1',
          '#43aa8b',
          '#f9c74f',
          '#98c1d9'
        ],
        hoverBackgroundColor: [
          '#a73234',
          '#b15727',
          '#265d75',
          '#2f6e5b',
          '#ac8a3b',
          '#6c97af'
        ],
        data: dailyBreakdown()
      }
    ]
  }

  return (
    <div className='reports-content'>
      <div className='total-reports-container'>
        <h4 className='total-reports-header'>Total Daily Expense</h4>
        <h3 className='reports-total-expenses'>${totalExpenses()}</h3>
      </div>
      <label className='reports-date-label'>Choose a Day</label>
      <input className='reports-date-select' type="date" value={date} onChange={e => setDate(e.target.value)} />
      <div className='pie-chart-container'>
        {
          data.datasets[0].data.every(amount => amount === '0.00') ? 
          <span className='empty-pie-message'>You have no expenses for the selected day</span> : null
        }
        <Pie
          data={data}
          options={{
            title: {
              display: true,
              text: 'Daily Expense Breakdown',
              fontSize: 30
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </div>
    </div>
  )
}
