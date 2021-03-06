import React, { useEffect, useContext } from 'react'
import '../styles/search.css'
import { getSavedRepos, getRepoById } from '../libs/api'
import { RepoContext } from '../libs/Context'
import ResultsList from './ResultsList'

const Profile = () => {

    const { favoriteRepos, setFavoriteRepos, onDelete } = useContext(RepoContext)
    
    useEffect(async() => {
        let repos = []
        const res = await getSavedRepos()
        for (let item of res){
            let repoInfo = await getRepoById(item.repoId)
            repoInfo['comment'] = item.comment
            repos.push(repoInfo)
        }
        setFavoriteRepos(repos)
    }, [onDelete])

    return (
        <div className='container'>
            <h1>Profile page</h1>
            <ResultsList repos={favoriteRepos} favorite={true} />
        </div>
    )
}

export default Profile
