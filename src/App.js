import React, { useState } from 'react'
import './App.css';
import Search from './components/Search'
import Profile from './components/Profile'
import ResultsList from './components/ResultsList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { RepoContext } from './libs/Context'

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Router>
      <RepoContext.Provider value={{repos, setRepos}}>.
        <nav>
          <div>
            <Link to="/search">Search</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/">
            <Search/>
          </Route>
        </Switch>
      </RepoContext.Provider>
    </Router>
  );
}

export default App;
