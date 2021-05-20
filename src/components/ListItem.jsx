import React, {useState, useContext} from 'react'
import '../styles/listItem.css'
import {addRepo, removeRepo, updateComment} from '../libs/api'
import { RepoContext } from '../libs/Context'
import {BiCommentAdd, BiStar} from 'react-icons/bi';
import {MdFavorite} from 'react-icons/md'
import {IoMdHeartDislike} from 'react-icons/io'
import {GoInfo} from 'react-icons/go'
import {RiCodeBoxLine} from 'react-icons/ri'


const ListItem = (props) => {

    const { favoriteRepos, setFavoriteRepos, onDelete, setOnDelete } = useContext(RepoContext)
    const {id, owner, language, created_at, html_url, stargazers_count, comment} = props
    const [moreInfo, setMoreInfo] = useState(false)
    const [repoContent, setRepoContent] = useState({repoId: id, comment: ''})
    const [commentBox, setCommentBox] = useState(false)

    const changeState = () => {
        setMoreInfo(!moreInfo)
    }

    const addToProfile = () => {
        addRepo(repoContent)
    }

    const removeFromProfile = (e) => {
        removeRepo(id)
        let newFavoriteList = favoriteRepos
        const index = newFavoriteList.indexOf(x=>x.repoId===id);
        if (index > -1) {
            newFavoriteList.splice(index, 1);
        }
        setFavoriteRepos(newFavoriteList)
        setOnDelete(onDelete + 1)
    }

    const handleChange = (e) => {
        setRepoContent({repoId: id, comment:e.target.value})
    }

    const addComment = () => {
        updateComment(id, repoContent.comment)
        setCommentBox(false)
    }

    return (
        <div className='listItem'>
            <div className='itemTitle'>
                <div className='repoName'>
                    <h3>{props.name}</h3>
                </div>
                <button className='titleBtn' onClick={changeState}>
                    <GoInfo/></button>
                {props.favorite ? 
                    <button className='titleBtn' onClick={removeFromProfile}><IoMdHeartDislike/></button>
                    :
                    <button className='titleBtn' onClick={addToProfile}><MdFavorite/></button>}
                <button className='titleBtn' 
                    onClick={()=>setCommentBox(!commentBox)}><BiCommentAdd/></button>
            </div>
            
            {moreInfo && <div>
                <div className='info'>
                    <span class='infoText'>Owner: {owner.login}</span>
                    <span class='infoText'>Created at: {created_at.slice(0, 10).split("-").reverse().join(".")}</span>
                    <span class='infoText'><RiCodeBoxLine/> {language}</span>
                    <span class='infoText'><BiStar/> {stargazers_count}</span>
                </div>
                    <a href={html_url}> {html_url}</a>
                </div>}

                {commentBox && 
                    <div>
                        <input value={repoContent.comment}
                        onChange={handleChange}
                        type='text'
                        name='comment' 
                        />
                        <button onClick={addComment}>add comment</button>
                    </div>}
                {!commentBox && <p>{repoContent.comment || comment }</p>}

        </div>
    )
}

export default ListItem
