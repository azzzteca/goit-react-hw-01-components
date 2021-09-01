// import "./App.css";

// 1я часть ДЗ
// import user from './components/Profile/user.json';
// import Profile from './components/Profile/Profile';

// 2я часть ДЗ
import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';

// 3я часть ДЗ
// import friends from './components/FriendList/friends.json';
// import FriendList from './components/FriendList/FriendList';

// 4я часть ДЗ
// import TransactionHistory from './components/Transactions/TransactionHistory';
// import transactions from './components/Transactions/transactions.json';

function App() {
  return (
    // 1я часть ДЗ
    // <Profile
    //   name={user.name}
    //   tag={user.tag}
    //   location={user.location}
    //   avatar={user.avatar}
    //   stats={user.stats}
    // />

    // 2я часть ДЗ
    <Statistics title="Upload stats" stats={statisticalData} />

    // 3я часть ДЗ
    // <FriendList friends={friends} />

    // 4я часть ДЗ
    // <TransactionHistory items={transactions} />
  );
}

export default App;
