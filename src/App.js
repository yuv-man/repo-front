import React, { useState } from 'react'
import './App.css';
import Search from './components/Search'
import ResultsList from './components/ResultsList';
import { RepoContext } from './libs/Context'

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <div>
    <RepoContext.Provider value={{repos, setRepos}}>
      <Search/>
      <ResultsList/>
    </RepoContext.Provider>
    </div>
  );
}

export default App;
