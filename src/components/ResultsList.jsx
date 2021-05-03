import React from 'react'
import { RepoContext } from '../libs/Context'
import  ListItem  from './ListItem'

const ResultsList = (props) => {

    // const { repos } = useContext(RepoContext)
    const {repos} = props

    return (
        <div>
            {repos ? (<ul>
                {repos.map(repo => { 
                    return (<li key={repo.id}><ListItem {...repo} favorite={props.favorite}/> 
                    </li>)
                })} 
            </ul>) : null}
        </div>
        
    )
}

export default ResultsList
