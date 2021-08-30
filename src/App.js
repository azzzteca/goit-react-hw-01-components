import logo from "./logo.svg";
import "./App.css";

import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;
