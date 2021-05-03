import React, { useEffect, useState } from 'react'
import { getSavedRepos, getRepoById } from '../libs/api'
import ResultsList from './ResultsList'

const Profile = () => {

    const [ savedRepos, setSavedRepos ] = useState([])

    useEffect(async() => {
        let repos = []
        const res = await getSavedRepos()
        for (let item of res){
            let repoInfo = await getRepoById(item.repoId)
            repoInfo['comment'] = item.comment
            repos.push(repoInfo)
        }
        setSavedRepos(repos)
    }, [])

    return (
        <div>
            <span>profile page</span>
            <ResultsList repos={savedRepos} favorite={true}/>
        </div>
    )
}

export default Profile
