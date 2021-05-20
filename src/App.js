import React, { useState } from 'react'
import './App.css';
import Search from './components/Search'
import Profile from './components/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { RepoContext } from './libs/Context'

function App() {

  const [favoriteRepos, setFavoriteRepos] = useState([]);
  const [onDelete, setOnDelete] = useState(0)

  return (
    <Router>
      <RepoContext.Provider value={{favoriteRepos, setFavoriteRepos, onDelete, setOnDelete}}>.
        <nav className='navBar'>
          <div className='navText'>
            <Link to="/search">Search</Link>
          </div>
          <div className='navText'>
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
