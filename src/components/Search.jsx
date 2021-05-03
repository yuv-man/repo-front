import React, {useContext, useState} from 'react'
import {searchOrg} from '../libs/api'
import { RepoContext } from '../libs/Context'
import ResultsList from './ResultsList'

const Search = () => {

    const { repos, setRepos } = useContext(RepoContext)
    const [ searchValue, setSearchValue ] = useState('')

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
        <div>
            <form onSubmit={submitQuery}>
                <input
                value={searchValue}
                onChange={handleChange}
                type='text'
                name='search'
                placeholder='Search GitHub Companies' 
                />
            </form>
            <ResultsList repos={repos}/>
        </div>
    )
}

export default Search;

