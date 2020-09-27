import React, { useState } from 'react'
import moment from 'moment';

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
        debugger
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

  const totalExpenses = () => {
    const transactions = JSON.parse(localStorage.getItem('ExtraAppTransactions') || JSON.stringify([]))
    let total = 0;
    const week = getWeek();
    transactions.forEach(transaction => {
      if (week.includes(transaction.date)) {
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
      <div>
        {
          getWeek().map(day => <div>{day}</div>)
        }
      </div>
    </div>
  )
}
