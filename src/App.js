// import logo from "./logo.svg";
// import "./App.css";

// 1я часть ДЗ
// import user from "./components/Profile/user.json";
// import Profile from "./components/Profile/Profile";

// 2я часть ДЗ
import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';

// 3я часть ДЗ

// 4я часть ДЗ

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
  );
}

export default App;
