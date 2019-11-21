import React from 'react';
import Profile from './components/Profile/Profile';
// import FriendList from './components/FriendList';
import Statistics from './components/Statistics/Statistics';
// import Transaction from './components/Transaction';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';

const App = () => (
  <>
    <Profile user={user} />
    {/* <FriendList /> */}
    <Statistics title="File upload" stats={statisticalData} />
    {/* <Transaction /> */}
  </>
);

export default App;
