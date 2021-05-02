import React, { useContext, useState } from 'react'
import { RepoContext } from '../libs/Context'
import  ListItem  from './ListItem'

const ResultsList = () => {

    const { repos } = useContext(RepoContext)

    const showInfo = (e) =>{
        console.log(e.target.id)
    }

    return (
        <div>
            {repos ? (<ul>
                {repos.map(repo => { 
                    return (<li key={repo.id}><ListItem {...repo}/> 
                    </li>)
                })} 
            </ul>) : null}
        </div>
        
    )
}

export default ResultsList
