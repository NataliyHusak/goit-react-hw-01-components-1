import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/Transaction/TransactionHistory';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/Transaction/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="File upload" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
