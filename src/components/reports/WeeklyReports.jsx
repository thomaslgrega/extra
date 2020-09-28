import React, { useState } from 'react'
import moment from 'moment';
import { Line } from 'react-chartjs-2';

export const WeeklyReports = () => {
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

  const getWeek = () => {
    let dayOfWeek = (new Date(`${date}T00:00:00.000-07:00`)).getDay();
    const week = [];
    const referenceDate = moment(date, "YYYY-MM-DD") 
    let day;
    while (week.length < 7) {
      if (dayOfWeek > 0) {
        day = referenceDate.clone().subtract(dayOfWeek, 'days').format("YYYY-MM-DD");
        day.split('/').join('-');
        week.push(day);
      } else if (dayOfWeek < 0) {
        day = referenceDate.clone().add(Math.abs(dayOfWeek), 'days').format("YYYY-MM-DD");
        day.split('/').join('-');
        week.push(day);
      } else {
        week.push(date);
      }
      dayOfWeek--;
    }

    return week;
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const totalExpenses = () => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    let total = 0;
    const week = getWeek();
    transactions.forEach(transaction => {
      if (week.includes(transaction.date)) {
        total += parseFloat(transaction.amount);
      }
    })

    return formatNumber(total.toFixed(2));
  }

  const populateData = () => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    const data = [];
    const week = getWeek();
    week.forEach(day => {
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

  const [date, setDate] = useState(todaysDate);

  const data = {
    labels: getWeek(),
    datasets: [
      {
        label: 'Weekly Expenses',
        fill: true,
        lineTension: 0.2,
        backgroundColor: 'rgba(12, 238, 99, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 2,
        data: populateData()
      }
    ]
  }

  return (
    <div>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <span>${totalExpenses()}</span>
      <div className='line-graph-container'>
        <Line
          data={data}
          options={{
            title: {
              display: true,
              text: `Weekly Expense Breakdown`,
              fontSize: 30
            },
            legend: {
              display: false,
            }, 
            // maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  )
}
