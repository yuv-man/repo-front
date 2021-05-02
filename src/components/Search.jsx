import React, {useContext, useState} from 'react'
import {searchOrg} from '../libs/api'
import { RepoContext } from '../libs/Context'

const Search = () => {

    const { setRepos } = useContext(RepoContext)
    const [ searchValue, setSearchValue ] = useState('')

    const submitQuery = async(e) => {
        e.preventDefault()
        const res = await searchOrg(searchValue)
        if (typeof res === 'object'){
            setRepos(res)
            console.log(res)
        }   
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <form onSubmit={submitQuery}>
            <input
            value={searchValue}
            onChange={handleChange}
            type='text'
            name='search'
            placeholder='Search GitHub Companies' 
            />
        </form>
    )
}

export default Search;

