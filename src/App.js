import React from 'react';
import Profile from './components/Profile/Profile';
// import FriendList from './components/FriendList';
// import Statistics from './components/Statistics';
// import Transaction from './components/Transaction';
import user from './components/Profile/user.json';

const App = () => (
  <>
    <Profile user={user} />
    {/* <FriendList /> */}
    {/* <Statistics /> */}
    {/* <Transaction /> */}
  </>
);

export default App;
