import React from 'react';
import { Navbar } from './components/Navbar';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import './reset.css';
import { Summary } from './components/Summary';
import { Transactions } from './components/Transactions';

function App() {
  return (
      <HashRouter>
        <div>
          <Navbar />
          <Route path='/summary' component={Summary} />
          <Route path='/transactions' component={Transactions} />
        </div>
      </HashRouter>
  );
}

export default App;
