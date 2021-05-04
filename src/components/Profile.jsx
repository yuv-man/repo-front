import React, { useEffect, useContext } from 'react'
import { getSavedRepos, getRepoById } from '../libs/api'
import { RepoContext } from '../libs/Context'
import ResultsList from './ResultsList'

const Profile = () => {

    const { favoriteRepos, setFavoriteRepos } = useContext(RepoContext)
    
    useEffect(async() => {
        let repos = []
        const res = await getSavedRepos()
        for (let item of res){
            let repoInfo = await getRepoById(item.repoId)
            repoInfo['comment'] = item.comment
            repos.push(repoInfo)
        }
        setFavoriteRepos(repos)
    }, [favoriteRepos])

    return (
        <div>
            <span>profile page</span>
            <ResultsList repos={favoriteRepos} favorite={true} />
        </div>
    )
}

export default Profile
