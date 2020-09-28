import React from 'react';
import { Navbar } from './components/Navbar';
import { Route, HashRouter } from 'react-router-dom';
import './stylesheets/App.css';
import './stylesheets/reset.css';
import './stylesheets/summary.css';
import './stylesheets/transactions.css';
import { Summary } from './components/Summary';
import { Transactions } from './components/Transactions';
import { Reports } from './components/reports/Reports';
import { DailyReports } from './components/reports/DailyReports';
import { WeeklyReports } from './components/reports/WeeklyReports';
import { MonthlyReports } from './components/reports/MonthlyReports';

function App() {
  return (
      <HashRouter>
        <div>
          <Navbar />
          <Route path='/summary' component={Summary} />
          <Route path='/transactions' component={Transactions} />
          <Route path='/report' component={Reports} />
          <Route path='/report/daily' component={DailyReports} />
          <Route path='/report/week' component={WeeklyReports} />
          <Route path='/report/month' component={MonthlyReports} />
        </div>
      </HashRouter>
  );
}

export default App;
