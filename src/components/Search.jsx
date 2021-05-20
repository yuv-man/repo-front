import React, {useContext, useState} from 'react'
import '../styles/search.css';
import {searchOrg} from '../libs/api'
import { RepoContext } from '../libs/Context'
import ResultsList from './ResultsList'


const Search = () => {

    const [ repos, setRepos ]  = useState([])
    const [ searchValue, setSearchValue ] = useState('')
    const [sortValue, setSortValue ] = useState('')

    const changeFilter = (e) =>{
        sortBy(e.target.value)
    }

    const sortBy = (sortValue) => {
        let sortedRepos = repos
        switch(sortValue){
            case 'stars':
                sortedRepos.sort((a,b) => (a.stargazers_count > b.stargazers_count) ? -1 : 1)
                break;
            case 'created':
                sortedRepos.sort((a,b) => (a.created_at > b.created_at) 
                        ? 1 : -1 )
                break;
            case 'forks':
                sortedRepos.sort((a,b) => (a.forks > b.forks) 
                        ? 1 : -1 )
        }
        setRepos(sortedRepos)
        setSortValue(sortValue)
    }

    const submitQuery = async(e) => {
        e.preventDefault()
        const res = await searchOrg(searchValue)
        if (typeof res === 'object'){
            setRepos(res)
        }   
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className='container'>
            <form onSubmit={submitQuery}>
                <input
                className='search'
                value={searchValue}
                onChange={handleChange}
                type='text'
                name='search'
                placeholder='Search GitHub Companies' 
                />
                <button className='searchButton' onClick={submitQuery}>Search</button>
                <select className='filter' onChange = {changeFilter} >
                <option value=''>filter by...</option>
                <option value='stars'>stars</option>
                <option value='forks'>forks</option>
                <option value='created'>created at</option>
            </select>
            </form>
            <ResultsList repos={repos}/>
        </div>
    )
}

export default Search;

