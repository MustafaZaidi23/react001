import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { AccountSummary } from './component/AccountSummary';
import { TransactionHistory } from './component/TransactionHistory';
import { AddTransaction } from './component/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
